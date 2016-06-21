'use strict';

const cn = require('co-nextware');

/**
 * Expose
 */

module.exports = common;


/**
 * Implements
 */

function common(Model){
    if(typeof Model === 'string') Model = require('app/models/'+Model);

    return {
        getCount: cn(getCount),
        list: cn(list),
        oneById: cn(oneById),
        createOne: cn(createOne),
        updateOne: cn(updateOne),
        remove: cn(remove)
    };

    /**
     *
     * Implements
     *
     */

    function *getCount(req, res, next){
        buildQueryParams(req, res, next);

        let ret = yield Model.getCount(req.params);
        res.ok(ret);
    }

    function *list(req, res, next){
        let objs = yield Model.list(req.params);
        res.ok(objs);
    }

    function *oneById(req, res, next){
        let obj = yield Model.oneById(req.params.objectId);
        res.ok(obj._toJSON({role: req.user.role, me: req.user}));
    }

    function *remove(req, res, next){
        logger('To remove obj:', Model.modelName, 'id: ', req.params.objectId);
        let obj = yield Model.findOneAndRemove({ _id: req.params.objectId}).exec();
        res.ok(obj);
    }

    function *createOne(req, res, next){
        logger.info(`(${__filename}): createOne:`, req.body);
        let obj = yield Model.createOne(req.body);
        res.ok(obj.toJSON());
    }

    function *updateOne(req, res, next){
        logger('To update obj:', Model.modelName, 'params: ', req.body);

        req.params._id = req.params.objectId;

        let obj = yield Model.updateOne(req.params);
        res.ok(obj._toJSON({role: req.user.role, me: req.user}));
    }

};
