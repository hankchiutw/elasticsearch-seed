"use strict";

const es = require('lib/elasticsearch-extend');

module.exports = es.model('user', {
    username: { type: "string"},
    nickname: { type: "string"},
    fullname: { type: "string"},
    phone: { type: "string"}
});
