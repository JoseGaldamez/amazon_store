const { Router } = require("express");
const appRouter = Router();

const AppsController = require("../controllers/apps");
const controller = new AppsController();

appRouter.get("/", controller.getApps);
appRouter.post("/", controller.postApps);
appRouter.put("/:id", controller.updateApps);
appRouter.delete("/:id", controller.deleteApps);

module.exports = appRouter;
