const bookmarkService = require("./bookmark.service");
const asyncHandler = require("../../utils/asyncHandler");

const createBookmark = asyncHandler(async (req, res) => {
  const bookmark = await bookmarkService.createBookmark(
    req.user.id,
    req.body
  );

  res.status(201).json({
    success: true,
    message: "Bookmark saved successfully",
    data: bookmark,
  });
});

const getBookmarks = asyncHandler(async (req, res) => {
  const bookmarks = await bookmarkService.getBookmarks(req.user.id);

  res.status(200).json({
    success: true,
    message: "Bookmarks fetched successfully",
    data: bookmarks,
  });
});

const deleteBookmark = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await bookmarkService.deleteBookmark(id, req.user.id);

  res.status(200).json({
    success: true,
    message: "Bookmark deleted successfully",
  });
});

module.exports = {
  createBookmark,
  getBookmarks,
  deleteBookmark,
};