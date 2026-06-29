const historyService = require("./history.service");
const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const addToHistory = asyncHandler(async (req, res) => {
  const history = await historyService.addToHistory(
    req.user.id,
    req.body
  );

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        true,
        MESSAGES.HISTORY.CREATED,
        history
      )
    );
});

const getHistory = asyncHandler(async (req, res) => {
  const history = await historyService.getHistory(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.HISTORY.FETCHED,
        history
      )
    );
});

const deleteHistoryItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await historyService.deleteHistoryItem(id, req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.HISTORY.DELETED
      )
    );
});

const clearHistory = asyncHandler(async (req, res) => {
  await historyService.clearHistory(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.HISTORY.CLEARED
      )
    );
});

module.exports = {
  addToHistory,
  getHistory,
  deleteHistoryItem,
  clearHistory,
};