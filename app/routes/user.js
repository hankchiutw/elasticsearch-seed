'use strict';

const common = require('app/controllers/common')('User');
const user = require('app/controllers/user');
const router = require('express').Router();

/**
 * Expose
 */

module.exports = function(app, auth){
    console.log('user routes ...');

/**
 * Routes
 */

    router.get('/validToken', auth.verifyBearer, user.validToken);
    router.post('/login', user.login);
    router.all('/logout', user.logout);

    return router;
};
