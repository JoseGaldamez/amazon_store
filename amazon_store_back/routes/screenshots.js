const { Router } = require("express");
const { check } = require("express-validator");
const screenshotsRouter = Router();

const ScreenshotController = require("../controllers/screenshots");
const validateFields = require("../middlewares/validateFields");
const controller = new ScreenshotController();

screenshotsRouter.get("/:id", controller.getScreenshotByApp);
screenshotsRouter.post(
  "/:id",
  check("url", "Url is required").not().isEmpty(),
  validateFields,
  controller.postScreenshotToApp
);

module.exports = screenshotsRouter;
