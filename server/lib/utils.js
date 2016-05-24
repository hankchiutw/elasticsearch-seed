'use strict';

const co = require('co');

module.exports = {
    onStream
};

/**
 * Generatorized stream processing
 * @params {Object} Model
 * @params {Object} conditions
 * @params {Object} onDataCallback ES6 generator
 */
function *onStream(Model, conditions, onDataCallback){
    if(!onDataCallback){
        onDataCallback = conditions;
        conditions = {};
    }
    const start = Date.now();
    let count = 0;
    let changedCount = 0;
    let totalCount = 0;

    yield new Promise(function(resolve, reject){
        Model.find(conditions).lean().stream() 
            .on('data', co.wrap(function*(obj){
                totalCount++;
                const result = yield onDataCallback(obj);

                count++;
                process.stdout.write(count+' ');
                if(result.ok != 1 || result.n != 0) logger.simple(`(${Model.modelName}) (result, count, changedCount): ${JSON.stringify(result)}, ${count}, ${changedCount++}, ${Date.now()-start}ms`);

            }))
            .on('error', logger.error)
            .on('end', co.wrap(function*(){
                logger.info(`(${Model.modelName}) onStream end: ${totalCount} ${Date.now()-start}ms`);
//                resolve();
            }));
    });
}
