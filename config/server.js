const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const { sequelize } = require('./models');
const routes = require('./routes');
require('dotenv').config({ path: './config/db.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Set up session with connect-session-sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Set up Handlebars.js as the template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});


