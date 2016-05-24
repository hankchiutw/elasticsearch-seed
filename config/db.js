'use strict';

const config = require('config/config');
const mongoose = require('mongoose-extend');

/**
 * Expose
 */

module.exports = function(boot){
    console.log('Config db and boot ...');

    mongoose.connection
        .once('open', boot)
        .on('disconnected', () => logger.error('(mongo) disconnected'))
        .on('reconnected', () => logger.info('(mongo) reconnected'))
        .on('error', (err) => {
            logger.error('(mongo) err:', err)
        });

    return mongoose.connect(config.db, config.dbOptions);
};
