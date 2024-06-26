// middleware/auth.js
module.exports = (req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect('/signin');
    }
  };
  