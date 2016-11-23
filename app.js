"use strict";

require('babel-polyfill');
const https = require('https');
const koa = require('koa');
const co = require('co');
const {readFileSync} = require('fs');
const {join} = require('path');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compile = webpack(webpackConfig);

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

app.use(devMiddleware(compile, {
    // display no info to console (only warnings and errors)
    noInfo: false,

    // display nothing to the console
    quiet: false,

    // switch into lazy mode
    // that means no watching, but recompilation on every request
    lazy: true,

    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },

    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: "/src/",

    // custom headers
    headers: { "X-Custom-Header": "yes" },

    // options for formating the statistics
    stats: {
        colors: true
    }
}));

app.use(hotMiddleware(compile, {
  // log: console.log,
  // path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
}));


https.createServer(
    options, 
    app.callback()
).listen(process.env["PORT"] || 3000);