const { response, request } = require("express");

const getApps = (req = request, res = response) => {
  res.status(200).json({ msg: "Hola Get - Controller" });
};

const postApps = (req, res = response) => {
  const { name, price } = req.body;
  res.status(201).json({ msg: "Hola POST - Controller", name, price });
};

const updateApps = (req, res = response) => {
  const { id } = req.params;

  res.status(200).json({ msg: "Hola UPDATE - Controller", id });
};

const patchApps = (req, res = response) => {
  res.status(200).json({ msg: "Hola PATCH - Controller" });
};

const deleteApps = (req, res = response) => {
  res.status(200).json({ msg: "Hola DELETE - Controller" });
};

module.exports = {
  getApps,
  postApps,
  updateApps,
  patchApps,
  deleteApps,
};
