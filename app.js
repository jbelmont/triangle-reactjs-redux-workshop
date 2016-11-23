"use strict";

const https = require('https');
const koa = require('koa');
const co = require('co');
const {readFileSync} = require('fs');
const {join} = require('path');

const app =  new koa();

const users = require(join(__dirname, 'users/users'));

require(join(__dirname, 'config/config'))["dotEnv"];

const options = {
  key: readFileSync(join(__dirname, 'ca/key.pem')),
  cert: readFileSync(join(__dirname, 'ca/cert.pem'))
};

app.use(co.wrap(function* () {
  return yield users.routes();
}));

app.use(co.wrap(function* () {
  return yield users.allowedMethods(); 
}));

https.createServer(
    options, 
    app.callback()
).listen(process.env["PORT"] || 3000);