const { Model, Sequelize, DataTypes } = require("sequelize");

const DOWNLOADS_TABLE = "downloads";
const DownloadsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  appDownloadedId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "app_downloaded_id",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.fn("now"),
  },
};

class Downloads extends Model {
  static associate(models) {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DOWNLOADS_TABLE,
      modelName: "Downloads",
      timestamps: false,
    };
  }
}

module.exports = {
  DOWNLOADS_TABLE,
  DownloadsSchema,
  Downloads,
};
