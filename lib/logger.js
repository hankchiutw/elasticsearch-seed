/** @module */

var util = require('util');
var colors = {
    log: {
        pre: '\x1b[2m%s\x1b[0m',    // grey
        msg: '\x1b[0m%s\x1b[0m'
    },
    info: {
        pre: '\x1b[34m%s\x1b[0m',    // blue
        msg: '\x1b[106;34m%s\x1b[0m'   // light blue, fg white
    },
    error: {
        pre: '\x1b[31m%s\x1b[0m',   // fgRed
        msg: '\x1b[41;97m%s\x1b[0m'    // bgRed
    }
};

/**
 * @namespace
 */
var logger = {
    /** Simple logger with less information */
    simple: _contextLogBuilder('info', {depth: 1}),

    /**
     * An error object buidling helper with error code
     * @param {String} message
     * @param {Number} code
     * @return {Object} JSON object with keys 'message', 'code'
     */
    E: function(message, code){ return { message, code }; }
};

/**
 * Wrap for console.log, console.info, console.error
 * @function log
 * @function info
 * @function error
 * @memberof logger
 */
['log', 'info', 'error'].forEach(function(attr){
    logger[attr] = _contextLogBuilder(attr);
});


/**
 * Create logger using specified console context
 * @param {String=log,info,error} context
 * @param {Object} options Options of util.inspect
 * @return {Function}
 * @private
 */
function _contextLogBuilder(context, options){
    options = Object.assign({depth: 5}, options);
    return function func(){
        var args = Array.prototype.slice.call(arguments);
        var at = new Date();
        args.forEach(function(obj, i){
            var pre = "["+context.toUpperCase()+" @ "+at.toISOString()+"][args "+i+"]: ";
            console[context](colors[context].pre, pre);
            console[context](colors[context].msg, util.inspect(obj, options));
        });

        return true;
    };
}

/**
 * Logger object with different contexts and helper functions
 */
module.exports = logger.log;
Object.keys(logger).forEach(function(attr){
    Object.defineProperty(module.exports, attr, {
        value: logger[attr]
    });
});
