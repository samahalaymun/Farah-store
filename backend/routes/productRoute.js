const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
 
} = require("../controllers/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWares");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const { uploadImages, deleteImages } = require("../controllers/uploadCtrl");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", getProduct);
router.put(
  "/upload",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/", getAllProduct);

module.exports = router;
