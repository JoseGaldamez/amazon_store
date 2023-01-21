const { Model, Sequelize, DataTypes } = require("sequelize");
const { APPS_TABLE } = require("./apps.model");

const RATINGS_TABLE = "ratings";
const RatingsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  rating: {
    allowNull: false,
    type: DataTypes.INTEGER,
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

class Ratings extends Model {
  static associate(models) {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RATINGS_TABLE,
      modelName: "Ratings",
      timestamps: false,
    };
  }
}

module.exports = {
  RATINGS_TABLE,
  RatingsSchema,
  Ratings,
};
