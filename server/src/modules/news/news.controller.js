const newsService = require("./news.service");
const ApiResponse = require("../../../utils/ApiResponse");

const getTopHeadlines = async (req, res, next) => {
  try {
    const news = await newsService.getTopHeadlines(req.query);

    res.status(200).json(new ApiResponse(true, "Top headlines fetched successfully", news));
  } catch (error) {
    next(error);
  }
};

const searchNews = async (req, res, next) => {
  try {
    const news = await newsService.searchNews(req.query);

    res.json(news);
  } catch (error) {
    next(error);
  }
};

const getNewsByTopic = async (req, res, next) => {
  try {
    const { topic } = req.params;

    const news = await newsService.getNewsByTopic(topic, req.query);

    res.json(news);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsByTopic,
};
