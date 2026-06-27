const express = require("express");

const router = express.Router();

const newsController = require("./news.controller");

router.get("/headlines", newsController.getTopHeadlines);

router.get("/test", (req, res) => {
  res.send("News Route Working ✅");
});

module.exports = router;
