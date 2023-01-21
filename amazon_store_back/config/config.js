const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  db: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "amazon_store",
    password: process.env.MYSQL_PASSWORD || "secret_password",
    database: process.env.MYSQL_DATABASE || "amazon_store",
    port: process.env.MYSQL_PORT || 3307,
  },
};

module.exports = config;
