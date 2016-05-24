'use strict';

const apiUrl = require('config/config').publicApiUrl;
const assert = require('chai').assert;
const api = require('chai-api')(apiUrl);
const db = require('chai-mongo');

const utils = require('test/lib/utils');

/**
 * @params {Object} mock
 */
module.exports = function (mock){

    // do something with mock
    before(function*(){

    });


    // safely clear test data
    after(function*(){

    });

};
