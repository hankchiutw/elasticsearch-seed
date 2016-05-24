'use strict';

const config = require("config/config");
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const morgan = require('morgan');
const path = require('path');
const crypto = require('crypto');
const mime = require('node-mime');

const res = require('config/middlewares/res');
const cors = require('config/middlewares/cors');

/**
 * Expose
 */

module.exports = function(app){
    logger('Config express ...');

    // logger
    app.use(morgan('[:response-time ms][:date[iso]] :status :remote-addr ":method :url :res[content-length] HTTP/:http-version" :remote-user ":user-agent" ":referrer"'));

    // template engine
    app.set('views', path.join(__dirname, '..', 'app/views'));
    app.set('view engine', 'html');
    app.engine('html', ejs.__express);

    // Static files middleware
    app.use(express.static(path.join(__dirname, '..', 'public')));

    // request parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    /**
     * Common middlewares
     */

    app.use(cors);
    app.use(res);

};
