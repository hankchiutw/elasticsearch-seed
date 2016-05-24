'use strict';

const ERROR_CODE_ENUM = {
    400: 'Bad request. Check body parameter and query parameters.',
    401: 'Unauthorized(Authorization header not found or wrong)',
    403: 'Not permitted',
    404: 'Object not found'
};

/**
 * Success and Fail callback
 */

let ret = function(req, res, next){
    res.ok = _ok;
    res.fail = _fail;
    next();
};
ret.fail = _fail;

module.exports = ret;


/**
 * Private implementation
 */

function _ok(obj){
    var ret = {
        result: {
            isSuccess: true,
            result: obj
        }
    };
    logger.simple("res OK: ", ret);
    this.send(ret);
}

/**
 *
 * @example
 * {
 *  result: {
 *      isSuccess: false,
 *      errorCode: 450,
 *      errorMessage: '', // for client
 *      errorData: '' // for program
 *  }
 * }
 */
function _fail(obj, code){
    const errorMessage = ERROR_CODE_ENUM[code] ? ERROR_CODE_ENUM[code] : (typeof obj !== 'string' ? JSON.stringify(obj) : obj);
    let ret = {
        result: {
            isSuccess: false,
            errorCode: code || 450,
            errorMessage,
            errorData: obj 
        }
    };
    logger.error("res FAIL: ", ret);
    this.json(ret);
}
