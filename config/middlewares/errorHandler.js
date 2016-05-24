'use strict';

const config = require('config/config');
const fail = require('config/middlewares/res').fail;

/**
 * Expose
 */

exports.clientErrorHandler = function (err, req, res, next) {
    res.fail = fail;

    if(err.stack) logger.error('clientErrorHandler:', err.stack);

    if(res.headersSent) return next(err);
    if(typeof err === 'string') res.fail(err);
    if(typeof err === 'object') res.fail(err.message, err.code);
};

exports.mongoErrorHandler = function (err, req, res, next) {
    logger.error('mongoErrorHandler:', err);
    if(typeof err !== 'object') err = {message: err};

    if(err.name === 'CastError') err.code = 400;

    if(err.name === 'ValidationError'){
        Object.keys(err.errors).forEach(function(path){
            err.message += ' '+err.errors[path].message;
        });
        err.code = 400;
    }
    if(err.name === 'MongoError'){
        err.code = 400;
    }
    next(err);
};
