// controllers/authController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    await User.create({ username, password });
    req.session.loggedIn = true;
    req.session.username = username;
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error signing up');
  }
};

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.loggedIn = true;
      req.session.username = user.username;
      res.redirect('/dashboard');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Error signing in');
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
