const dotenv = require('dotenv');

dotenv.config();

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root_password",
  database: process.env.MYSQL_DATABASE || "todo_list",
  host: process.env.MYSQL_HOST || "localhost",
  dialect: 'mysql',
  logging: false,
};

// console.log(config);

module.exports = {
  development: config,
  test: config,
  production: config,
};