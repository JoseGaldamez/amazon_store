const { response, request } = require("express");

class CommentsController {
  constructor() {}

  getComments = (req = request, res = response) => {
    res.status(200).json({ msg: "Hola Get - Controller" });
  };

  postComments = (req, res = response) => {
    const { name, price } = req.body;
    res.status(201).json({ msg: "Hola POST - Controller", name, price });
  };

  updateComments = (req, res = response) => {
    const { id } = req.params;

    res.status(200).json({ msg: "Hola UPDATE - Controller", id });
  };

  patchComments = (req, res = response) => {
    res.status(200).json({ msg: "Hola PATCH - Controller" });
  };

  deleteComments = (req, res = response) => {
    res.status(200).json({ msg: "Hola DELETE - Controller" });
  };
}

module.exports = CommentsController;
