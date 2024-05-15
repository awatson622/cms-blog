app.get('/', (req, res) => {
    // Render homepage view
    res.render('homepage', { /* data object */ });
});

app.get('/signin', (req, res) => {
    // Render signin view
    res.render('signin', { /* data object */ });
});

const port = process.env.PORT || 3000; // Default to port 3000 if PORT variable is not defined
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./models'); // Import your sequelize instance
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
    db: sequelize,
  }),
  resave: false,
  saveUninitialized: false,
}));

module.exports = app;

