const express = require("express");
const cors = require("cors");
const { json } = require("express");
const appRouter = require("../routes/apps");
const commentsRouter = require("../routes/comments");
const config = require("../config/config");

class Server {
  constructor() {
    this.app = express();
    this.port = config.port;
    this.appsPath = "/api/apps";
    this.commentsPath = "/api/comments";

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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
