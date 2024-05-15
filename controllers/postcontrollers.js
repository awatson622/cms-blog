// controllers/postController.js
const { Post } = require('../Models');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Post.create({ title, content, userId: req.session.userId });
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error creating post');
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id, title, content } = req.body;
    await Post.update({ title, content }, { where: { id } });
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error updating post');
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.body;
    await Post.destroy({ where: { id } });
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error deleting post');
  }
};
