const { Sequelize } = require("sequelize");
const config = require("../config/config");
const setupModels = require("../db/models");

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);
const DB = encodeURIComponent(config.db.database);

const URI = `mysql://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${DB}`;

const sequelize = new Sequelize(URI, {
  dialect: "mysql",
  logging: false,
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
