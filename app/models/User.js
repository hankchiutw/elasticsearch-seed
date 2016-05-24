"use strict";

const BaseSchema = require('./BaseSchema');
const schema = new BaseSchema(require('./UserSchema'));

/**
 * Models instance methods
 */

schema.defineMethods({
});

/**
 * Static methods of mongoose.model 
 */

schema.defineStatics({
});

/**
 * Register
 */

const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = schema.mongoose.model(modelName, schema, modelName);
