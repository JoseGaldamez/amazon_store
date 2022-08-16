const { Router } = require("express");
const ratingRouter = Router();

const RatingController = require("../controllers/ratings");
const controller = new RatingController();

ratingRouter.get("/:id", controller.getRatingByApp);
ratingRouter.post("/:id", controller.postRatingToApp);

module.exports = ratingRouter;
