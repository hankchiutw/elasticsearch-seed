'use strict';

const assert = require('chai').assert;

/**
 * Expose common asserts
 */
module.exports = {
    assertSomething
};

function assertSomething(something, prefix){
    assert.isOk(something, prefix+'something is ok');
}
