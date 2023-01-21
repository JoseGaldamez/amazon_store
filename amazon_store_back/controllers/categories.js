const { response, request } = require("express");
const sequelize = require("../libs/sequelize");

class CategoriesController {
  constructor() {}

  getCategories = async (req = request, res = response) => {
    const categories = await sequelize.models.Categories.findAll();
    res.status(200).json({ ok: true, categories });
  };

  postCategories = async (req = request, res = response) => {
    const newCategory = await sequelize.models.Categories.create(req.body);
    res.status(201).json({ ok: true, newCategory });
  };

  updateCategory = async (req, res = response) => {
    const { id } = req.params;
    const category = await sequelize.models.Category.findByPk(id);
    if (!category) {
      res.status(404).json({ ok: false, message: "Category not found" });
    } else {
      const updatedCategory = await category.update(req.body);
      res.status(200).json({ ok: true, updatedCategory });
    }
  };

  deleteCategory = async (req, res = response) => {
    const { id } = req.params;
    const category = await sequelize.models.Categories.findByPk(id);
    if (!category) {
      res.status(404).json({ ok: false, message: "Category not found" });
    } else {
      await category.destroy();
      res.status(200).json({ ok: true, id });
    }
  };
}

module.exports = CategoriesController;
