const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  if (!req.body || !req.body.formData) {
    return res.send({ err: 'empty form' });
  }
  const { email, username, password, confirmpassword } = req.body.formData;
  if (!email || !username || !password || !confirmpassword) {
    return res.send({ err: 'all fields required' });
  }
  if (password !== confirmpassword) {
    return res.send({ err: 'passwords do not match' });
  }
  const existsAlready = await User.find({ email });
  if (existsAlready)
    return res.send({ err: 'user with this email already exists' });
  const newUser = new User({ email, username, password: hashedPass });
  newUser
    .save()
    .then(() => res.send({ newUser }))
    .catch(() =>
      res.send({
        err: 'database user creation error, we are working to fix this',
      })
    );
});

router.post('/login', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.send({ err: 'All fields required' });
  }
  User.findOne({ email: req.body.email }, async function (err, user) {
    if (err) {
      return res.json({
        err:
          'Sorry, there was an issue with connecting to the database. We are working on fixing this issue.',
      });
    } else {
      if (!user) {
        return res.json({ err: 'No user found with this email' });
      }
      const passwordsMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordsMatch) {
        const token = formatToken(user);
        res.json({
          status: 'success',
          message: 'Login successful',
          data: {
            user,
            token,
          },
        });
      } else {
        return res.json({ err: 'Incorrect email and password combination' });
      }
    }
  });
});

module.exports = router;
