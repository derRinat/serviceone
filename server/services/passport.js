const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const PartnerModel = require('../models/partner');
const config = require('../config');

const options = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwt = new JwtStrategy(options, (payload, done) => {

    const { partner_id } = payload;

    PartnerModel.findOne({_id: partner_id}, (err, partner) => {
     
        if(err) return done(err, false);

        partner
            ? done(null, partner)
            : done(null, false);
    })
});

passport.use(jwt);
