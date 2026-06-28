const newsService = require("./news.service");
const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");

const getTopHeadlines = asyncHandler(async (req, res) => {
  const news = await newsService.getTopHeadlines(req.query);

  res.status(200).json(new ApiResponse(true, "Top headlines fetched successfully", news));
});

const searchNews = asyncHandler(async (req, res) => {
  const news = await newsService.searchNews(req.query);

  res.status(200).json(new ApiResponse(true, "News fetched successfully", news));
});

const getNewsByTopic = asyncHandler(async (req, res) => {
  const { topic } = req.params;

  const news = await newsService.getNewsByTopic(topic, req.query);

  res.status(200).json(new ApiResponse(true, `${topic} news fetched successfully`, news));
});

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsByTopic,
};
