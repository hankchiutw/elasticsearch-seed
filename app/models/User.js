"use strict";

const es = require('elasticsearch-extend');

module.exports = es.model('user', {
    username: { type: "string"},
    nickname: { type: "string"},
    fullname: { type: "string"},
    phone: { type: "string"}
});
