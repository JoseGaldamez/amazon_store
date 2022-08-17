const { Apps, AppsSchema } = require("./apps.model");
const { Comments, CommentsSchema } = require("./comments.model");
const { DownloadsSchema, Downloads } = require("./downloads.model");
const { Ratings, RatingsSchema } = require("./ratings.model");
const { Screenshots, ScreenshotSchema } = require("./screenshots.model");
const { Categories, CategoriesSchema } = require("./categories.model");

const setupModels = (sequelize) => {
  Apps.init(AppsSchema, Apps.config(sequelize));
  Comments.init(CommentsSchema, Comments.config(sequelize));
  Ratings.init(RatingsSchema, Ratings.config(sequelize));
  Downloads.init(DownloadsSchema, Downloads.config(sequelize));
  Screenshots.init(ScreenshotSchema, Screenshots.config(sequelize));
  Categories.init(CategoriesSchema, Categories.config(sequelize));

  Apps.associate(sequelize.models);
};

module.exports = setupModels;
