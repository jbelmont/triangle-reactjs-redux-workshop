const https = require('https');
const koa = require('koa');
const {readFileSync} = require('fs');
const {join} = require('path');

const app = koa();

require(join(__dirname, 'config/config'))["dotEnv"];

const options = {
  key: readFileSync(join(__dirname, 'ca/key.pem')),
  cert: readFileSync(join(__dirname, 'ca/cert.pem'))
};

https.createServer(options, app.callback()).listen(process.env["PORT"] || 3000);