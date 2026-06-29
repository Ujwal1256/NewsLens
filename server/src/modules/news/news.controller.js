const newsService = require("./news.service");
const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const getTopHeadlines = asyncHandler(async (req, res) => {
  const news = await newsService.getTopHeadlines(req.query);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.NEWS.FETCHED,
        news
      )
    );
});

const searchNews = asyncHandler(async (req, res) => {
  const news = await newsService.searchNews(req.query);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.NEWS.SEARCH_SUCCESS,
        news
      )
    );
});

const getNewsByTopic = asyncHandler(async (req, res) => {
  const { topic } = req.params;

  const news = await newsService.getNewsByTopic(topic, req.query);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.NEWS.TOPIC_SUCCESS,
        news
      )
    );
});

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsByTopic,
};