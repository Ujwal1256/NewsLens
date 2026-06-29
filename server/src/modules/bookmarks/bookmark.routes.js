const express = require("express");
const validate = require("../../middleware/validate.middleware");
const { articleSchema } = require("../../validations/article.validation");

const router = express.Router();

const bookmarkController = require("./bookmark.controller");
const authenticate = require("../../middleware/auth.middleware");

/**
 * @swagger
 * /bookmarks:
 *   post:
 *     summary: Save a bookmark
 *     tags:
 *       - Bookmarks
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               url:
 *                 type: string
 *               source:
 *                 type: string
 *               publishedAt:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Bookmark created
 */
router.post("/", authenticate, validate(articleSchema), bookmarkController.createBookmark);

/**
 * @swagger
 * /bookmarks:
 *   get:
 *     summary: Get all bookmarks
 *     tags:
 *       - Bookmarks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bookmarks fetched
 */
router.get("/", authenticate, bookmarkController.getBookmarks);

/**
 * @swagger
 * /bookmarks/{id}:
 *   delete:
 *     summary: Delete a bookmark
 *     tags:
 *       - Bookmarks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bookmark deleted
 */
router.delete("/:id", authenticate, bookmarkController.deleteBookmark);

module.exports = router;
