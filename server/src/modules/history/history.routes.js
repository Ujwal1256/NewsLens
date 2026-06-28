const express = require("express");

const router = express.Router();

const historyController = require("./history.controller");
const authenticate = require("../../middleware/auth.middleware");

router.post("/", authenticate, historyController.addToHistory);

router.get("/", authenticate, historyController.getHistory);

router.delete("/:id", authenticate, historyController.deleteHistoryItem);

router.delete("/", authenticate, historyController.clearHistory);

module.exports = router;