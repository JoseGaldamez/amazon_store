const { Router } = require("express");
const {
  getApps,
  postApps,
  updateApps,
  deleteApps,
  patchApps,
} = require("../controllers/apps");

const router = Router();

router.get("/", getApps);
router.post("/", postApps);
router.put("/:id", updateApps);
router.patch("/:id", patchApps);
router.delete("/:id", deleteApps);

module.exports = router;
