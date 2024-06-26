module.exports = (req, res, next) => {
    if (req.session && req.session.userId) {
      return next();
    } else {
      return res.redirect('/signin');
    }
  };
  
  // routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/logout', authController.logout);

module.exports = router;

  