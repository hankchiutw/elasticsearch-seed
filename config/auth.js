'use strict';

const passport = require("passport");
const bearer = require('config/auth/bearer');

passport.use(bearer);

console.log('Config auth ...');
module.exports = {
    initialize: function(){ return passport.initialize(); },
    verifyBearer: passport.authenticate('bearer', {session: false}),
    check
};

function check(){
    return [ this.verifyBearer, function(req, res, next){
        // if auth failed
        // return next('error');
        next();
    }];
}
