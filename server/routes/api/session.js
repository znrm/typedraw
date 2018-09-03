const express = require('express');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../../models/User');

const router = express.Router();
const secretOrKey = process.env.SECRET_OR_KEY || 'DevelopmentSecretNotNeeded';

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: 'This user does not exist' });
    }

    return bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        return jsonwebtoken.sign(
          { id: user.id },
          secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              id: user.id,
              email: user.email,
              documents: user.documents,
              token: `Bearer ${token}`,
              success: true,
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
