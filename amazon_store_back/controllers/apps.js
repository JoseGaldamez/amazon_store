const { response, request } = require("express");
const sequelize = require("../libs/sequelize");

class AppsController {
  constructor() {}

  // Get All Apps
  getApps = async (req = request, res = response) => {
    const apps = await sequelize.models.Apps.findAll();
    res.json({ ok: true, apps });
  };

  // Create New App
  postApps = (req = request, res = response) => {
    res.json({ ok: true });
  };

  // Update App
  updateApps = (req, res = response) => {
    const { id } = req.params;

    res.status(200).json({ msg: "Hola UPDATE - Controller", id });
  };

  // Update a field of an App
  patchApps = (req, res = response) => {
    res.status(200).json({ msg: "Hola PATCH - Controller" });
  };

  // Delete App
  deleteApps = (req, res = response) => {
    res.status(200).json({ msg: "Hola DELETE - Controller" });
  };
}

module.exports = AppsController;
