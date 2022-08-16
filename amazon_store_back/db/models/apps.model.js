const { Model, DataTypes, Sequelize } = require("sequelize");

const APPS_TABLE = "apps";
const AppsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  appname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  developer: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  installed: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class Apps extends Model {
  static associate(models) {
    // models
    this.hasMany(models.Comments, {
      as: "comments",
      foreignKey: "app_id",
    });
    this.hasMany(models.Ratings, {
      as: "ratings",
      foreignKey: "app_id",
    });
    this.hasMany(models.Screenshots, {
      as: "screenshots",
      foreignKey: "app_id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: APPS_TABLE,
      modelName: "Apps",
      timestamps: false,
    };
  }
}

module.exports = {
  APPS_TABLE,
  AppsSchema,
  Apps,
};
