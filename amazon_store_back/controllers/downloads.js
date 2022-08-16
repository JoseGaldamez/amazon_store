const { response, request } = require("express");
const sequelize = require("../libs/sequelize");

class DownloadController {
  constructor() {}

  getDownloadsByApp = async (req = request, res = response) => {
    const { id } = req.params;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const downloads = await sequelize.models.Downloads.count({
        where: { appDownloadedId: id },
      });

      res.status(200).json({ ok: true, downloads });
    }
  };

  postDownloadToApp = async (req = request, res = response) => {
    const { id } = req.params;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const newDownload = await sequelize.models.Downloads.create({
        appDownloadedId: id,
      });
      res.status(201).json({ ok: true, newDownload });
    }
  };
}

module.exports = DownloadController;
