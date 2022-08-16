const { Router } = require("express");
const commentsRouter = Router();

const CommentsController = require("../controllers/comments");
const controller = new CommentsController();

commentsRouter.get("/", controller.getComments);
commentsRouter.post("/", controller.postComments);
commentsRouter.put("/:id", controller.updateComments);
commentsRouter.delete("/:id", controller.deleteComments);

module.exports = commentsRouter;
