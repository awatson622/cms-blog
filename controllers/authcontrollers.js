const { User } = require('../Models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const newUser = await User.create({ username, password: hashedPassword });

    // Set session variables
    req.session.loggedIn = true;
    req.session.userId = newUser.id;
    req.session.username = newUser.username;

    res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing up');
  }
};

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ where: { username } });

    // If user exists and password is correct
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.loggedIn = true;
      req.session.userId = user.id;
      req.session.username = user.username;
      res.redirect('/dashboard');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing in');
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error logging out');
    } else {
      res.redirect('/');
    }
  });
};
