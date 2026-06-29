const express = require("express");
const validate = require("../../middleware/validate.middleware");
const { articleSchema } = require("../../validations/article.validation");

const router = express.Router();

const historyController = require("./history.controller");
const authenticate = require("../../middleware/auth.middleware");

router.post("/", authenticate, validate(articleSchema), historyController.addToHistory);

router.get("/", authenticate, historyController.getHistory);

router.delete("/:id", authenticate, historyController.deleteHistoryItem);

router.delete("/", authenticate, historyController.clearHistory);

module.exports = router;
