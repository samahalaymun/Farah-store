const express = require("express");
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
} = require("../controllers/colorCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWares");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.delete("/:id", authMiddleware, isAdmin, deleteColor);
router.get("/:id", getColor);
router.get("/", getallColor);

module.exports = router;
