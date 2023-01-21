const { Model, Sequelize, DataTypes } = require("sequelize");
const { APPS_TABLE } = require("./apps.model");

const SCREENSHOTS_TABLE = "screenshots";
const ScreenshotSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  url: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  appId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "app_id",
    references: {
      model: APPS_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class Screenshots extends Model {
  static associate(models) {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SCREENSHOTS_TABLE,
      modelName: "Screenshots",
      timestamps: false,
    };
  }
}

module.exports = {
  SCREENSHOTS_TABLE,
  ScreenshotSchema,
  Screenshots,
};
