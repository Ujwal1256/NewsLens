const express = require("express");

const router = express.Router();

const newsController = require("./news.controller");

/**
 * @swagger
 * /news/headlines:
 *   get:
 *     summary: Get top headlines
 *     tags:
 *       - News
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Top headlines fetched successfully
 */
router.get("/headlines", newsController.getTopHeadlines);

/**
 * @swagger
 * /news/search:
 *   get:
 *     summary: Search news articles
 *     tags:
 *       - News
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *           example: India
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Search results returned
 */
router.get("/search", newsController.searchNews);

/**
 * @swagger
 * /news/topics/{topic}:
 *   get:
 *     summary: Get news by topic
 *     tags:
 *       - News
 *     parameters:
 *       - in: path
 *         name: topic
 *         required: true
 *         schema:
 *           type: string
 *           example: technology
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Topic news fetched successfully
 */
router.get("/topics/:topic", newsController.getNewsByTopic);


router.get("/test", (req, res) => {
  res.send("News Route Working ✅");
});

module.exports = router;
