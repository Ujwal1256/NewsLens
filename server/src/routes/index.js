const express = require("express");
const router = express.Router();
console.log("Routes Loaded");

const newsRoutes = require("../modules/news/news.routes");

router.use("/news", newsRoutes);

module.exports = router;