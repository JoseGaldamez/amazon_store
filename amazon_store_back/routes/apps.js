const { Router } = require("express");
const { check } = require("express-validator");
const appRouter = Router();

const AppsController = require("../controllers/apps");
const validateFields = require("../middlewares/validateFields");
const controller = new AppsController();

appRouter.get("/", controller.getApps);
appRouter.get("/category/:category", controller.getAppsByCategory);
appRouter.post(
  "/",
  check("appname", "App name is require").not().isEmpty(),
  check("image", "Image is require").not().isEmpty(),
  check("description", "Description is require").not().isEmpty(),
  check("developer", "Developer is require").not().isEmpty(),
  check("price", "Price is require").not().isEmpty(),
  check("category", "Category is require").not().isEmpty(),
  check("installed", "Installed is require").not().isEmpty(),
  validateFields,
  controller.postApps
);

appRouter.post("/fill", controller.fillAppsToDB);
appRouter.put("/:id", controller.updateApps);
appRouter.delete("/:id", controller.deleteApps);

module.exports = appRouter;
