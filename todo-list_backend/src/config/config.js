const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  define: {
    underscored: true,
  },
};

module.exports = {
  development: config,
  test: config,
  production: config,
};