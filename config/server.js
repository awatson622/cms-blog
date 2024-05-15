const express = require('express');
const exphbs  = require('express-handlebars');

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
