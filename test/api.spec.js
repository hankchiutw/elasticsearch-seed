'use strict';

require('mocha-generators').install();

const apiUrl = require('config/config').publicApiUrl;
const assert = require('chai').assert;
const api = require('chai-api')(apiUrl);
const db = require('chai-mongo');

/** api tests */
describe(`>>${__filename}`, function(){
    let mock = {
    };

    require('./lib/provision')(mock);

    it('hello ok', function*(){
        yield api.success('GET', '/hello');
    });

    /**
     * sub tests
     */
//    require('./user')(mock);

});

