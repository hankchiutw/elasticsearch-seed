'use strict';

const apiUrl = require('config/config').publicApiUrl;
const assert = require('chai').assert;
const api = require('chai-api')(apiUrl);
const db = require('chai-mongo');

const utils = require('test/lib/utils');

/** user api tests */
module.exports = function(mock){
    describe(`>>${__filename}`, function(){
        // req object for each tests
        beforeEach(function(){
            this.req = {
                headers: { authorization: `Bearer xxx` }
            };

        });

        // remove created data
        after(function*(){
        });

        /**
         * sub tests
         */

        describe('#Get', function(){
            it('should successfully list', function*(){
                yield api.success('GET', '/users', this.req);
            });
        });

    });

};

