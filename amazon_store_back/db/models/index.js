const { Apps, AppsSchema } = require("./apps.model");

const setupModels = (sequelize) => {
  Apps.init(AppsSchema, Apps.config(sequelize));
};

module.exports = setupModels;
