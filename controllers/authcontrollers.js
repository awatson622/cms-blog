// controllers/authController.js
const User = require('../models/User');

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
  // Implement signin logic
};
