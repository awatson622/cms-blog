const Sequelize = require('sequelize');
require('dotenv').config({ path: './config/db.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // or another database dialect
});

const User = require('./user.js')(sequelize, Sequelize.DataTypes);
const Post = require('./post.js')(sequelize, Sequelize.DataTypes);

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Post };

