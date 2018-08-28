const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../../models/User');

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send(req.payload);
  }
);

router.post('/register', (req, res) => {
  // Check to make sure nobody has already registered with this email
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ email: 'A user with this email address already exists' });
    } else {
      console.log(req.body);

      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      // encrypt password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
