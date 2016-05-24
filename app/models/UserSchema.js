"use strict";

const fields = {
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true, select: false},  // bcrypt
    nickname: { type: String},
    fullname: { type: String},
    phone: { type: String}
};


/**
 * Expose
 */
module.exports = fields;
