const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWares");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const { uploadImages, deleteImages } = require("../controllers/uploadCtrl");
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
