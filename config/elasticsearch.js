'use strict';

const es = require('elasticsearch-extend');

/**
 * Expose
 */

module.exports = function(boot){
    console.log('Config elasticsearch ...');

    es.connect({
        host: 'localhost:9200',
        log: 'info'
    })
    .then(boot)
    .catch( err => {
        console.error('(elasticsearch) err:', err.stack);
    });
};
