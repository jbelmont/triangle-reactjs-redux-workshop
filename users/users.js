"use strict";

const {join} = require('path');
const winston = require('winston');

const router = require('koa-router')();

const db = require(join(__dirname, '../db/db'));
db.dbActions()
    .then(values => {
        const data = {
            users: JSON.stringify(values)
        };
        
        router
            .get('/', function* () {
                this.body = 'Triangle ReactJS Users Group.';
            });

        router.
            get('/api/v1/users', function* () {
                this.body = data;
            });
    });

module.exports = router;