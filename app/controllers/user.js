'use strict';

const cn = require('co-nextware');
const User = require('app/models/User');

/**
 * Expose
 */

module.exports = {
    validToken: cn(validToken),
    login: cn(login),
    logout: cn(logout)
};

function *validToken(req, res, next){
}

function *login(req, res, next){
}

function *logout(req, res, next){
}
