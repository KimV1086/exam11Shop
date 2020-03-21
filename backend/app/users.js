const express = require('express');
const User = require('../models/User');
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', (req, res) => {
  const user = new User(req.body);

  user.generateToken();
  user.save()
    .then(user => res.send({message: 'user registered', user}))
    .catch(error => res.status(400).send(error))
});

router.post('/sessions', async (req, res) => {
  const user = await User.findOne({username: req.body.username});

  if (!user) {
    return res.status(400).send({error: 'Username not found'});
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);

  if (!isMatch) {
    return res.status(400).send({error: 'Password is wrong'});
  }

  user.generateToken();
  await user.save();

  return res.send({message: 'Login successful', user});
});

router.delete('/sessions', async (req, res) => {
  const token = req.get('Authorization');
  const success = {message: 'Success'};

  if (!token) {
    return res.send(success);
  }
  const user = await User.findOne({token});

  if (!user) {
    return res.send(success);
  }

  user.generateToken();
  user.save();

  return res.send(success);
});


module.exports = router;