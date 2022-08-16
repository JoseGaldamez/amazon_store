const { Router } = require("express");
const appRouter = Router();

const AppsController = require("../controllers/apps");
const controller = new AppsController();

appRouter.get("/", controller.getApps);
appRouter.post("/", controller.postApps);
appRouter.put("/:id", controller.updateApps);
appRouter.patch("/:id", controller.patchApps);
appRouter.delete("/:id", controller.deleteApps);

module.exports = appRouter;
