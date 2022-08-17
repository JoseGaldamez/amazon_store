const { Model, Sequelize, DataTypes } = require("sequelize");
const { APPS_TABLE } = require("./apps.model");

const CATEGORIES_TABLE = "categories";
const CategoriesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class Categories extends Model {
  static associate(models) {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIES_TABLE,
      modelName: "Categories",
      timestamps: false,
    };
  }
}

module.exports = {
  CATEGORIES_TABLE,
  CategoriesSchema,
  Categories,
};
