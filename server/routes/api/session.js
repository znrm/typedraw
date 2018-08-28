const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../../models/User');
const keys = require('../../config/keys');

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const test = 'test';

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: 'This user does not exist' });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email };

        jsonwebtoken.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Incorrect password' });
      }
    });
  });
});

module.exports = router;
