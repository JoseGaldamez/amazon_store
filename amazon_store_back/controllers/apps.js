const { response, request } = require("express");
const { validationResult } = require("express-validator");
const sequelize = require("../libs/sequelize");

class AppsController {
  constructor() {}

  // Get All Apps
  getApps = async (req = request, res = response) => {
    const apps = await sequelize.models.Apps.findAll({
      include: ["comments", "ratings", "screenshots"],
    });

    res.json({ ok: true, apps });
  };

  getAppsByCategory = async (req = request, res = response) => {
    const apps = await sequelize.models.Apps.findAll({
      where: { category: req.params.category },
      include: ["comments", "ratings", "screenshots"],
    });
    res.json({ ok: true, apps });
  };

  // Create New App
  postApps = async (req = request, res = response) => {
    const newApp = await sequelize.models.Apps.create(req.body);
    res.json({ ok: true, newApp });
  };

  // Update App
  updateApps = async (req = request, res = response) => {
    const { id } = req.params;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const updatedApp = await app.update(req.body);
      res.status(200).json(updatedApp);
    }
  };

  // Delete App
  deleteApps = async (req = request, res = response) => {
    const { id } = req.params;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      await app.destroy();
      res.status(200).json({ ok: true, idDeleted: id });
    }
  };

  fillAppsToDB = async (req = request, res = response) => {
    const categories = await sequelize.models.Categories.findAll();
    if (categories.length === 0) {
      return res.status(404).json({
        ok: false,
        message: "Categories not found, add some categories before",
      });
    }

    for (let index = 1; index <= 50; index++) {
      await sequelize.models.Apps.create({
        appname: `App ${index}`,
        image: `${index}.webp`,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        developer: `Developer ${index}`,
        price: Math.random(),
        installed: Math.random() > 0.5,
        category: this.categoryRamdom(categories),
      });
    }

    res.json({ ok: true });
  };

  categoryRamdom = (categories) => {
    const index = Math.floor(Math.random() * categories.length);
    return categories[index].category;
  };
}

module.exports = AppsController;
