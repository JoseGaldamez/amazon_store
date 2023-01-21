const { Router } = require("express");
const { check } = require("express-validator");
const commentsRouter = Router();

const CommentsController = require("../controllers/comments");
const validateFields = require("../middlewares/validateFields");
const controller = new CommentsController();

commentsRouter.get("/", controller.getComments);
commentsRouter.post(
  "/",
  check("userName", "User name is require").not().isEmpty(),
  check("textComment", "Text of the comment is require").not().isEmpty(),
  check("image", "Image is require").not().isEmpty(),
  check("appId", "App Id is require").not().isEmpty(),
  validateFields,
  controller.postComments
);
commentsRouter.put("/:id", controller.updateComments);
commentsRouter.delete("/:id", controller.deleteComments);

module.exports = commentsRouter;
