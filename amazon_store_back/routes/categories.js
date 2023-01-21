const { Router } = require("express");
const { check } = require("express-validator");
const validateFields = require("../middlewares/validateFields");

const categoriesRouter = Router();

const CategoriesController = require("../controllers/categories");
const controller = new CategoriesController();

categoriesRouter.get("/", controller.getCategories);
categoriesRouter.post(
  "/",
  check("category", "Category is require").not().isEmpty(),
  validateFields,
  controller.postCategories
);
categoriesRouter.put(
  "/:id",
  check("category", "Category is required").not().isEmpty(),
  controller.updateCategory
);
categoriesRouter.delete("/:id", controller.deleteCategory);

module.exports = categoriesRouter;
