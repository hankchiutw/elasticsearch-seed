'use strict';

const es = require('elasticsearch');

/**
 * Class Document
 * @params {Object} params
 */
function Document(model, params){
    this.model = model;
    this.json = params;
}

Document.prototype = {
    toJSON
};

/**
 * Create a document in es index
 * @params {Object} model A model instance
 * @params {Object} params
 * @static
 */
Document.save = function *(model, params){
    const client = es.client;

    // save in db
    const result = yield client.index({
        index: model.modelName,
        type: 'document',
        body: params
    });
    
    // return instance
    return new Document(model, params);
};

module.exports = Document;


/**
 * Implements
 */

function toJSON(){
    // TODO: transformer
    return this.json;
}
