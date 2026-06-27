const newsService = require("./news.service");
const ApiResponse = require("../../../utils/apiResponse");

const getTopHeadlines = async (req, res, next) => {
  try {
    const news = await newsService.getTopHeadlines();

    return res.status(200).json(new ApiResponse(true, "Top headlines fetched successfully", news));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTopHeadlines,
};
