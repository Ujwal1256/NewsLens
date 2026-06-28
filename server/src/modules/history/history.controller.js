const historyService = require("./history.service");
const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const addToHistory = asyncHandler(async (req, res) => {
  const history = await historyService.addToHistory(req.user.id, req.body);

  res.status(201).json(
    new ApiResponse(true, "Article added to history", history)
  );
});

const getHistory = asyncHandler(async (req, res) => {
  const history = await historyService.getHistory(req.user.id);

  res.status(200).json(
    new ApiResponse(true, "History fetched successfully", history)
  );
});

const deleteHistoryItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await historyService.deleteHistoryItem(id, req.user.id);

  res.status(200).json(
    new ApiResponse(true, "History item deleted successfully")
  );
});

const clearHistory = asyncHandler(async (req, res) => {
  await historyService.clearHistory(req.user.id);

  res.status(200).json(
    new ApiResponse(true, "History cleared successfully")
  );
});

module.exports = {
  addToHistory,
  getHistory,
  deleteHistoryItem,
  clearHistory,
};