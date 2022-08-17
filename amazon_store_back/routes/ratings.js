const { Router } = require("express");
const { check } = require("express-validator");
const ratingRouter = Router();

const RatingController = require("../controllers/ratings");
const validateFields = require("../middlewares/validateFields");
const controller = new RatingController();

ratingRouter.get("/:id", controller.getRatingByApp);
ratingRouter.post(
  "/:id",
  check("rating", "Rating is required").not().isEmpty(),
  validateFields,
  controller.postRatingToApp
);

module.exports = ratingRouter;
