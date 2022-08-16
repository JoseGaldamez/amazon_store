const express = require("express");
const cors = require("cors");
const router = require("../routes/apps");
const { json } = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.applicationPath = "/api/apps";

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
    this.app.use(this.applicationPath, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
