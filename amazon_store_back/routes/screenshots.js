const { Router } = require("express");
const screenshotsRouter = Router();

const ScreenshotController = require("../controllers/screenshots");
const controller = new ScreenshotController();

screenshotsRouter.get("/:id", controller.getScreenshotByApp);
screenshotsRouter.post("/:id", controller.postScreenshotToApp);

module.exports = screenshotsRouter;
