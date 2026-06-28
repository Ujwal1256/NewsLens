const express = require("express");
const authRoutes = require("../modules/auth/auth.routes");
const newsRoutes = require("../modules/news/news.routes");

const router = express.Router();



router.use("/news", newsRoutes);
router.use("/auth", authRoutes);

module.exports = router;