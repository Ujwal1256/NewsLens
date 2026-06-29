const History = require("../../models/history.model");
const ApiError = require("../../utils/ApiError");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const addToHistory = async (userId, article) => {
  const { title, description, image, url, source, publishedAt } = article;

  return History.findOneAndUpdate(
    {
      user: userId,
      url,
    },
    {
      $set: {
        title,
        description,
        image,
        source,
        publishedAt,
        viewedAt: new Date(),
      },
    },
    {
      new: true,
      upsert: true,
    }
  );
};

const getHistory = async (userId) => {
  return History.find({
    user: userId,
  })
    .sort({
      viewedAt: -1,
    })
    .limit(50);
};

const deleteHistoryItem = async (historyId, userId) => {
  const history = await History.findOneAndDelete({
    _id: historyId,
    user: userId,
  });

  if (!history) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,
      MESSAGES.HISTORY.NOT_FOUND
    );
  }

  return history;
};

const clearHistory = async (userId) => {
  await History.deleteMany({
    user: userId,
  });
};

module.exports = {
  addToHistory,
  getHistory,
  deleteHistoryItem,
  clearHistory,
};