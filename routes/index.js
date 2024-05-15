// routes/index.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', auth, (req, res) => {
  res.render('dashboard');
});

module.exports = router;
