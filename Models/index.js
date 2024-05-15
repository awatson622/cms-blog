const { Sequelize } = require('sequelize');
require('dotenv').config({ path: './config/db.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // or another database dialect
});

// routes/index.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
  // Render homepage view with existing blog posts
  res.render('homepage', { posts: [/* array of posts */] });
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', auth, (req, res) => {
  // Render dashboard view with user's posts
  res.render('dashboard', { posts: [/* array of user posts */] });
});

module.exports = router;

// Export the sequelize instance to be used in other files
module.exports = sequelize;
