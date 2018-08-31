const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../../models/User');
const keys = { secretOrKey: process.env.SECRET_OR_KEY } || require('../../config/keys');

const router = express.Router();

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email
    });
  }
);

router.post('/register', (req, res) => {
  // Check to make sure nobody has already registered with this email
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ email: 'A user with this email address already exists' });
    }

    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    // encrypt password
    bcrypt.genSalt(10, (_, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(userRes => {
            const payload = { id: user.id, email: user.email };

            // IDK IF IM DOING THIS PART RIGHT
            return jsonwebtoken.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              { expiresIn: 3600 },
              (tokenErr, token) => {
                res.json({
                  id: userRes.id,
                  email: userRes.email,
                  token: `Bearer ${token}`,
                  success: true
                });
              }
            );
          })
          .catch(userErr => console.log(userErr));
      });
    });

    return newUser;
  });
});

module.exports = router;
