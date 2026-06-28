const express = require("express");

const router = express.Router();

const bookmarkController = require("./bookmark.controller");
const authenticate = require("../../middleware/auth.middleware");

router.post("/", authenticate, bookmarkController.createBookmark);
router.get("/", authenticate, bookmarkController.getBookmarks);
router.delete("/:id", authenticate, bookmarkController.deleteBookmark);

module.exports = router;