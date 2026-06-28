const Bookmark = require("../../models/bookmark.model");
const ApiError = require("../../utils/ApiError");

const createBookmark = async (userId, article) => {
  const { title, description, image, url, source, publishedAt } = article;

  const existingBookmark = await Bookmark.findOne({
    user: userId,
    url,
  });

  if (existingBookmark) {
    throw new ApiError(409, "Article already bookmarked");
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
  return await Bookmark.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};

const deleteBookmark = async (bookmarkId, userId) => {
  const deletedBookmark = await Bookmark.findOneAndDelete({
    _id: bookmarkId,
    user: userId,
  });

  if (!deletedBookmark) {
    throw new ApiError(404, "Bookmark not found");
  }

  return deletedBookmark;
};

module.exports = {
  createBookmark,
  getBookmarks,
  deleteBookmark,
};
