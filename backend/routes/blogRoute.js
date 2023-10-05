const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWares");
const { createBlog, updateBlog, deleteBlog, getBlog, getAllBlogs, likeTheBlog, dislikeTheBlog, uploadImages } = require("../controllers/blogCtrl");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImage");


router.post("/", authMiddleware, isAdmin,createBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
router.put("/likes", authMiddleware, likeTheBlog);
router.put("/dislikes", authMiddleware, dislikeTheBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);
router.get("/", getAllBlogs);

router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports =router
