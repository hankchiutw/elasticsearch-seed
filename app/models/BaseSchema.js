"use strict";

const BaseSchema = require('mongoose-extend').BaseSchema;
const ObjectId = BaseSchema.Types.ObjectId;

class Schema extends BaseSchema {
    constructor(fields){
        super(fields);

        let schema = this;

        /**
         * Instance methods of mongoose.model instance object(i.e. document)
         */

        schema.defineMethods({
        });

        /**
         * Static methods of mongoose.model 
         */

        schema.defineStatics({
        });

    }
    
}

/**
 * Expose
 */
module.exports = Schema;
