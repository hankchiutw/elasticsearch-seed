'use strict';

const cn = require('co-nextware');
const BaseSchema = require('app/models/BaseSchema');

/**
 * Expose
 */

module.exports = common;

Object.defineProperties(module.exports, {
    buildQueryParams: { value: buildQueryParams },
    buildParamsFrom: { value: buildParamsFrom }
});

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
        buildQueryParams(req, res, next);

        let objs = yield Model.list(req.params);
        let ret = BaseSchema.toJSONArray(objs, {role: req.user.role, me: req.user});
        res.ok(ret);
    }

    function *oneById(req, res, next){
        let obj = yield Model.oneById(req.params.objectId);
        if(!obj) throw logger.E('Null object '+req.params.objectId, 404);
        res.ok(obj._toJSON({role: req.user.role, me: req.user}));
    }

    function *remove(req, res, next){
        logger('To remove obj:', Model.modelName, 'id: ', req.params.objectId);
        let obj = yield Model.findOneAndRemove({ _id: req.params.objectId}).exec();
        if(!obj) obj = 'object not existed';
        res.ok(obj);
    }

    function *createOne(req, res, next){
        logger('To create obj:', Model.modelName, 'params: ', req.body);

        buildParamsFrom('body', req, res, next);

        let obj = yield Model.createOne(req.params);
        res.ok(obj._toJSON({role: req.user.role, me: req.user}));
    }

    function *updateOne(req, res, next){
        logger('To update obj:', Model.modelName, 'params: ', req.body);

        buildParamsFrom('body', req, res, next);

        req.params._id = req.params.objectId;

        let obj = yield Model.updateOne(req.params);
        res.ok(obj._toJSON({role: req.user.role, me: req.user}));
    }

};

/**
 * Util
 */

/**
 * Store token info in req.params for GET request
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
function buildQueryParams(req, res, next){
    buildParamsFrom('query', req, res, next);
}

/**
 * Store token info in req.params
 * @param {String} attr Attribute key of req to be copy from
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */

function buildParamsFrom(attr, req, res, next){
    req.params = req.params || {};

    // token info
    if(req.user.currentHouse) req.params._community = req.user.currentHouse.community;
    req.params._role = req.user.role;
    req.params._user = req.user;

    Object.assign(req.params, req[attr]);

    // ensure where parameter
    if(req.params.where && typeof req.params.where === 'string') req.params.where = JSON.parse(req.params.where);
    req.params.where = req.params.where || {};

}
