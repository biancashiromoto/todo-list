const config = {
  username: process.env.MYSQL_USER || "root",
  // password: process.env.MYSQL_ROOT_PASSWORD || "root_password",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || "todo_list",
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  logging: false,
};


module.exports = {
  development: config,
  test: config,
  production: config,
};