const bookmarkService = require("./bookmark.service");
const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const createBookmark = asyncHandler(async (req, res) => {
  const bookmark = await bookmarkService.createBookmark(
    req.user.id,
    req.body
  );

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        true,
        MESSAGES.BOOKMARK.CREATED,
        bookmark
      )
    );
});

const getBookmarks = asyncHandler(async (req, res) => {
  const bookmarks = await bookmarkService.getBookmarks(req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.BOOKMARK.FETCHED,
        bookmarks
      )
    );
});

const deleteBookmark = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await bookmarkService.deleteBookmark(id, req.user.id);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.BOOKMARK.DELETED
      )
    );
});

module.exports = {
  createBookmark,
  getBookmarks,
  deleteBookmark,
};