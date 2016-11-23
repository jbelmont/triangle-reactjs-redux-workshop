"use strict";

const {join} = require('path');
const winston = require('winston');

const router = require('koa-router')({ prefix: '/api/v1' });

const db = require(join(__dirname, '../db/db'));
db.dbActions()
    .then(values => {
        const data = {
            users: JSON.stringify(values)
        };
        router.get('/', function* () {
            this.body = data;
        });
    });

module.exports = router;