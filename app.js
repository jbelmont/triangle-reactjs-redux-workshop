"use strict";

const https = require('https');
const koa = require('koa');
const {readFileSync} = require('fs');
const {join} = require('path');
const middleware = require('koa-webpack');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
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


app.use(views(__dirname + '/views', {
  map: {
    hbs: 'handlebars'
  }
}));

app.use(async (ctx, next) => {
  ctx.state = {
    title: 'Triangle ReactJS Users'
  };
  await ctx.render('index.hbs');
});


app.use(bodyParser());
app.use(users.routes());

app.use(users.allowedMethods());

const webpackDevConfig = {
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
};
app.use(middleware(webpackDevConfig));

https.createServer(
    options, 
    app.callback()
).listen(process.env["PORT"] || 3000);