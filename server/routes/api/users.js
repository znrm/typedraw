const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../../models/User');

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
          .then(userRes => res.json(userRes))
          .catch(userErr => console.log(userErr));
      });
    });

    newUser.id = newUser._id;
    return newUser;
  });
});

module.exports = router;
