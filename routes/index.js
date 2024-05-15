const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Post } = require('../Models');

// Middleware to fetch posts and pass them to the view
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', auth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({ where: { userId: req.session.userId } });
    res.render('dashboard', { posts: userPosts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

