const History = require("../../models/history.model");
const ApiError = require("../../utils/ApiError");

const addToHistory = async (userId, article) => {
  const { title, description, image, url, source, publishedAt } = article;

  const history = await History.findOneAndUpdate(
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

  return history;
};

const getHistory = async (userId) => {
  return await History.find({
    user: userId,
  })
    .sort({ viewedAt: -1 })
    .limit(50);
};

const deleteHistoryItem = async (historyId, userId) => {
  const history = await History.findOneAndDelete({
    _id: historyId,
    user: userId,
  });

  if (!history) {
    throw new ApiError(404, "History item not found");
  }

  return history;
};

const clearHistory = async (userId) => {
  await History.deleteMany({
    user: userId,
  });

  return;
};

module.exports = {
  addToHistory,
  getHistory,
  deleteHistoryItem,
  clearHistory,
};