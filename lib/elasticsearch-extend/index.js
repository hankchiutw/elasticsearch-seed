'use strict'

const co = require('co');
const es = require('elasticsearch');

const Client = require('./lib/Client');
const Model = require('./lib/Model');

/**
 * Extend origin es object
 */
Object.assign(es, {
    isConnected: false,
    connect,
    model
});

module.exports = es;

/**
 * Implements
 */

/**
 * Connect and return a promise of ping result
 * @params {Object} params Same as params of origin elasticsearch.Client()
 * @return {Promise}
 */
function connect(params){
    es.client = new Client(params);

    return es.client.ping().then(function(result){
        es.isConnected = true;
        return Promise.resolve(result);
    });
};


/**
 * Create an index as a model instance
 */
function model(modelName, mapping){
    if(!es.isConnected) throw new Error('(elasticsearch-extend) not connected.');

    // delayed save to db
    const model = new Model({ modelName, mapping});
    co(model.save()).catch(console.error);

    // return instance
    return model;
};

