"use strict";

require('babel-polyfill');
const https = require('https');
const koa = require('koa');
const {readFileSync} = require('fs');
const {join} = require('path');
const middleware = require('koa-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const app =  new koa();

const users = require(join(__dirname, 'users/users'));

require(join(__dirname, 'config/config'))["dotEnv"];

const options = {
  key: readFileSync(join(__dirname, 'ca/key.pem')),
  cert: readFileSync(join(__dirname, 'ca/cert.pem'))
};

app.use(users.routes());

app.use(users.allowedMethods());

app.use(middleware({
  dev: {
    output: webpackConfig.output,
    entry: webpackConfig.entry,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    }
  }
}));

https.createServer(
    options, 
    app.callback()
).listen(process.env["PORT"] || 3000);