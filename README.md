# cms-blog

## Description

CMS Blog is a content management system (CMS)-style blog site that allows users to publish, edit, and delete blog posts. The application also includes user authentication, allowing users to sign up, log in, and manage their posts. This project demonstrates the use of the Model-View-Controller (MVC) paradigm, Sequelize ORM for MySQL database interactions, Express.js for the server, and Handlebars.js for templating views.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologiesUsed)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features
- User authentication: sign up, log in, and log out
- Create, read, update, and delete blog posts
- Comment on blog posts
- View all posts on the homepage
- View individual post details
- Protected routes ensuring that only logged-in users can create, update, or delete posts
- Session management with automatic session expiration

## Technologies Used

- Node.js: JavaScript runtime
- Express.js: Web framework for Node.js
- Sequelize: Promise-based Node.js ORM for MySQL
- MySQL2: MySQL client for Node.js
- dotenv: For loading environment variables from a .env file
- bcrypt: For hashing passwords
- express-session: For managing user sessions
- connect-session-sequelize: For storing sessions in a Sequelize-supported database
- express-handlebars: Template engine for rendering HTML pages
- Handlebars.js: Templating language for dynamic views


## Installation 
1. Clone the repository: git clone https://github.com/awatson622/cms-blog
2. Install dependencies: npm install
3. Set up .env file:
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_DIALECT=mysql
SESSION_SECRET=your_secret
4. Configure database: Ensure you have MySQL installed and running. Create the database using the credentials specified in your .env file.
5. Run database migrations: npx sequelize-cli db:migrate
6. Start server: npm start

## Usage
1. Navigate to the homepage:
  Open your browser and go to http://localhost:3000.
  
2. Sign up:
  Click on the sign-up link, enter a username and password, and submit the form.

4. Log in:
  Use your credentials to log in to the site.

6. Create a post:
  Navigate to the dashboard and create a new blog post by entering a title and content.

8. View posts:
  View all posts on the homepage. Click on a post title to view its details and comments.

9. Comment on a post:
  While viewing a post, add a comment if logged in.

10. Edit or delete posts:
  From the dashboard, edit or delete any of your posts.

11. Log out:
  Click the logout link to end your session.

## License
This project is licensed under the MIT License.
