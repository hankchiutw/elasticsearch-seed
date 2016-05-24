'use strict';

const cn = require('co-nextware');
const common = require('app/controllers/common')('User');

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
