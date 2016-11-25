'use strict';

const express = require('express');
const router = express.Router();
const {join} = require('path');
const winston = require('winston');

/**
 * Setup Database Connection
 * Create Database, table and insert values if necessary
 * Else grab values from Recipes table to use for client
 */
const db = require(join(__dirname, '../db/db'));

db.dbActions()
  .then(values => {

    const data = {
      users: JSON.stringify(values)
    };

    /* GET home page. */
    router.get('/', (req, res, next) => {
      res.render('index', data);
    });
  });

module.exports = router;
