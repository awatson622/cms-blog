const express = require('express');
const exphbs  = require('express-handlebars');
// server.js
const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT);
}

const app = express();

// Set up handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

require('dotenv').config();

const app = require('./app');
const sequelize = require('./models');

const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

module.exports = sequelize;

