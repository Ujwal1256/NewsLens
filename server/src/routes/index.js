const express = require("express");

const router = express.Router();

const newsRoutes = require("../modules/news/news.routes");
const authRoutes = require("../modules/auth/auth.routes");
const bookmarkRoutes = require("../modules/bookmarks/bookmark.routes");
const historyRoutes = require("../modules/history/history.routes");


router.use("/news", newsRoutes);
router.use("/auth", authRoutes);
router.use("/bookmarks", bookmarkRoutes);
router.use("/history", historyRoutes);

module.exports = router;