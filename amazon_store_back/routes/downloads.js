const { Router } = require("express");
const downloadRouter = Router();

const DownloadController = require("../controllers/downloads");
const controller = new DownloadController();

downloadRouter.get("/:id", controller.getDownloadsByApp);
downloadRouter.post("/:id", controller.postDownloadToApp);

module.exports = downloadRouter;
