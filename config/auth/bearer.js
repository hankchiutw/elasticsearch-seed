'use strict';

const cn = require('co-nextware');
const BearerStrategy = require('passport-http-bearer').Strategy;

/**
 * Expose
 */

module.exports = new BearerStrategy(cn(check));

/**
 * Implements
 */

function *check(token, done){
    // verify token

    // return user object
    return done(null, {});

}
