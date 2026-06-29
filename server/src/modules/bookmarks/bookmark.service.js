const Bookmark = require("../../models/bookmark.model");
const ApiError = require("../../utils/ApiError");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const createBookmark = async (userId, article) => {
  const { title, description, image, url, source, publishedAt } = article;

  const existingBookmark = await Bookmark.findOne({
    user: userId,
    url,
  });

  if (existingBookmark) {
    throw new ApiError(
      HTTP_STATUS.CONFLICT,
      MESSAGES.BOOKMARK.EXISTS
    );
  }

  const bookmark = await Bookmark.create({
    user: userId,
    title,
    description,
    image,
    url,
    source,
    publishedAt,
  });

  return bookmark;
};

const getBookmarks = async (userId) => {
  return Bookmark.find({ user: userId }).sort({
    createdAt: -1,
  });
};

const deleteBookmark = async (bookmarkId, userId) => {
  const deletedBookmark = await Bookmark.findOneAndDelete({
    _id: bookmarkId,
    user: userId,
  });

  if (!deletedBookmark) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,
      MESSAGES.BOOKMARK.NOT_FOUND
    );
  }

  return deletedBookmark;
};

module.exports = {
  createBookmark,
  getBookmarks,
  deleteBookmark,
};