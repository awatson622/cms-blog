// routes/post.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

router.post('/create', auth, postController.createPost);
router.post('/update', auth, postController.updatePost);
router.post('/delete', auth, postController.deletePost);

module.exports = router;
