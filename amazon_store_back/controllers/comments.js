const { response, request } = require("express");
const sequelize = require("../libs/sequelize");

class CommentsController {
  constructor() {}

  getComments = async (req = request, res = response) => {
    const comments = await sequelize.models.Comments.findAll();
    res.status(200).json({ ok: true, comments });
  };

  postComments = async (req = request, res = response) => {
    const { appId } = req.body;
    const app = await sequelize.models.Apps.findByPk(appId);
    if (!app) {
      res.status(404).json({ ok: false, message: "App not found" });
    } else {
      const newComment = await sequelize.models.Comments.create(req.body);
      res.status(201).json({ ok: true, newComment });
    }
  };

  updateComments = async (req, res = response) => {
    const { id } = req.params;
    const comment = await sequelize.models.Comments.findByPk(id);
    if (!comment) {
      res.status(404).json({ ok: false, message: "Comment not found" });
    } else {
      const updatedComment = await comment.update(req.body);
      res.status(200).json({ ok: true, updatedComment });
    }
  };

  deleteComments = async (req, res = response) => {
    const { id } = req.params;
    const comment = await sequelize.models.Comments.findByPk(id);
    if (!comment) {
      res.status(404).json({ ok: false, message: "Comment not found" });
    } else {
      await comment.destroy();
      res.status(200).json({ ok: true, id });
    }
  };
}

module.exports = CommentsController;
