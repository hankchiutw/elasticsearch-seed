'use strict';

const es = require('elasticsearch');

/**
 * Class Document
 * @params {Object} params
 */
function Document(params){
}

Document.prototype = {
//    toJSON
};

/**
 * Create a document in es index
 * @static
 */
Document.save = function *(modelName, params){
    const client = es.client;

    // save in db
    yield client.index({
        index: modelName,
        type: 'document',
        body: params
    });
    
    // return instance
    return new Document(params);
};

module.exports = Document;


/**
 * Implements
 */
