const { Model, Sequelize, DataTypes } = require("sequelize");
const { APPS_TABLE } = require("./apps.model");

const COMMENTS_TABLE = "comments";
const CommentsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "user_name",
  },
  textComment: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "text_comment",
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.fn("now"),
  },
  appId: {
    field: "app_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: APPS_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Comments extends Model {
  static associate(models) {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMENTS_TABLE,
      modelName: "Comments",
      timestamps: false,
    };
  }
}

module.exports = {
  COMMENTS_TABLE,
  CommentsSchema,
  Comments,
};
