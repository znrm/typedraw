const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../../models/User');
const keys = { secretOrKey: process.env.SECRET_OR_KEY } || require('../../config/keys');


router.post('/login', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: 'This user does not exist' });
    }

    return bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email };

        return jsonwebtoken.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      }

      return res.status(400).json({ password: 'Incorrect password' });
    });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  // res.redirect('/');
  res.json({
    success: true
  });
});

module.exports = router;
