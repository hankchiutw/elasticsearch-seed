'use strict';

const es = require('elasticsearch');

/**
 * Class Client
 */

function Client(params){
    const client = es.Client.call(this, params); 

    return client;
}

module.exports = Client;
