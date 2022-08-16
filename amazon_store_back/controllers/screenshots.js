const { response, request } = require("express");
const sequelize = require("../libs/sequelize");

class ScreenshotController {
  constructor() {}

  getScreenshotByApp = async (req = request, res = response) => {
    const { id } = req.params;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const screenshots = await sequelize.models.Screenshots.findAll({
        where: { appId: id },
      });

      res.status(200).json({ ok: true, screenshots });
    }
  };

  postScreenshotToApp = async (req = request, res = response) => {
    const { id } = req.params;
    const { url } = req.body;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const newScreenshot = await sequelize.models.Screenshots.create({
        url,
        appId: id,
      });
      res.status(201).json({ ok: true, newScreenshot });
    }
  };
}

module.exports = ScreenshotController;
