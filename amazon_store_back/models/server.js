const express = require("express");
const cors = require("cors");
const { json } = require("express");
const appRouter = require("../routes/apps");
const commentsRouter = require("../routes/comments");
const config = require("../config/config");
const ratingRouter = require("../routes/ratings");
const downloadRouter = require("../routes/downloads");

class Server {
  constructor() {
    this.app = express();
    this.port = config.port;
    this.appsPath = "/api/apps";
    this.commentsPath = "/api/comments";
    this.ratingPath = "/api/ratings";
    this.downloadsPath = "/api/downloads";

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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
