const express = require('express');
const router = express.Router();
const User = require('../models/User');

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
    .then((result) => res.send({ newUser }))
    .catch((err) =>
      res.send({
        err: 'database user creation error, we are working to fix this',
      })
    );
});

module.exports = router;
