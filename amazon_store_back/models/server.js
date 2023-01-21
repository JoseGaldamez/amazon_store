const express = require("express");
const cors = require("cors");
const { json } = require("express");
const appRouter = require("../routes/apps");
const commentsRouter = require("../routes/comments");
const config = require("../config/config");
const ratingRouter = require("../routes/ratings");
const downloadRouter = require("../routes/downloads");
const screenshotsRouter = require("../routes/screenshots");
const categoriesRouter = require("../routes/categories");

class Server {
  constructor() {
    this.app = express();
    this.port = config.port;
    this.appsPath = "/api/apps";
    this.commentsPath = "/api/comments";
    this.ratingPath = "/api/ratings";
    this.downloadsPath = "/api/downloads";
    this.screenshotsPath = "/api/screenshots";
    this.categoriesPath = "/api/categories";

    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(json());
    // Public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.appsPath, appRouter);
    this.app.use(this.commentsPath, commentsRouter);
    this.app.use(this.ratingPath, ratingRouter);
    this.app.use(this.downloadsPath, downloadRouter);
    this.app.use(this.screenshotsPath, screenshotsRouter);
    this.app.use(this.categoriesPath, categoriesRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
