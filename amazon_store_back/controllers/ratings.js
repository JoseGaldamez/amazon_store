const { response, request } = require("express");
const sequelize = require("../libs/sequelize");

class RatingController {
  constructor() {}

  getRatingByApp = async (req = request, res = response) => {
    const { id } = req.params;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const rating = await sequelize.models.Ratings.count({
        where: { appId: id },
      });

      res.status(200).json({ ok: true, rating });
    }
  };

  postRatingToApp = async (req = request, res = response) => {
    const { id } = req.params;
    const { rating } = req.body;
    const app = await sequelize.models.Apps.findByPk(id);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const newRating = await sequelize.models.Ratings.create({
        rating,
        appId: id,
      });
      res.status(201).json({ ok: true, newRating });
    }
  };
}

module.exports = RatingController;
