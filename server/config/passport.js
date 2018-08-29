const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
require('../models/User');

const User = mongoose.model('users');
const keys = { secretOrKey: process.env.SECRET_OR_KEY || require('../config/keys').secretOrKey };

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      User.findById(payload.id)
        .then(user => {
          if (user) {
            // return the user to the frontend
            return done(null, user);
          }
          // return false since there is no user
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
