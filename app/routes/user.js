'use strict';

const User = require('app/models/User');
const api = require('api-express').create(User);

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

    router.get('/', api.list);
    router.post('/', api.createOne);

    return router;
};
