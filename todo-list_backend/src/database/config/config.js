const dotenv = require('dotenv');

dotenv.config();

// const config = {
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   host: process.env.MYSQL_HOST,
//   dialect: 'mysql',
//   logging: false,
// };

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root_password",
  database: process.env.MYSQL_DATABASE || "database",
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