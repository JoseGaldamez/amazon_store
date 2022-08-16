const { Router } = require("express");
const appRouter = Router();

const AppsController = require("../controllers/apps");
const controller = new AppsController();

appRouter.get("/", controller.getApps);
appRouter.get("/category/:category", controller.getAppsByCategory);
appRouter.post("/", controller.postApps);
appRouter.post("/fill", controller.fillAppsToDB);
appRouter.put("/:id", controller.updateApps);
appRouter.delete("/:id", controller.deleteApps);

module.exports = appRouter;
