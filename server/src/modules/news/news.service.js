const gnewsClient = require("../../../services/gnews.client");
const ApiError = require("../../utils/ApiError");

const {
  DEFAULT_COUNTRY,
  DEFAULT_LANGUAGE,
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
} = require("../../config/constants");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const formatArticles = (articles = []) => {
  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    publishedAt: article.publishedAt,
    source: article.source.name,
  }));
};

const getTopHeadlines = async ({ page = DEFAULT_PAGE, limit = DEFAULT_LIMIT }) => {
  try {
    const { data } = await gnewsClient.get("/top-headlines", {
      params: {
        country: DEFAULT_COUNTRY,
        lang: DEFAULT_LANGUAGE,
        page,
        max: limit,
      },
    });

    return {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };
  } catch (error) {
    console.log("========== GNEWS ERROR ==========");
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("Message:", error.message);
    console.log("================================");

    throw new ApiError(
      HTTP_STATUS.SERVICE_UNAVAILABLE,
      error.response?.data?.errors?.join(", ") || error.message || "Unable to fetch top headlines"
    );
  }
};

const searchNews = async ({
  q,
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  lang = DEFAULT_LANGUAGE,
}) => {
  try {
    const { data } = await gnewsClient.get("/search", {
      params: {
        q,
        lang,
        page,
        max: limit,
      },
    });

    return {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };
  } catch (error) {
    throw new ApiError(HTTP_STATUS.SERVICE_UNAVAILABLE, MESSAGES.NEWS.SEARCH_FAILED);
  }
};

const getNewsByTopic = async (topic, { page = DEFAULT_PAGE, limit = DEFAULT_LIMIT }) => {
  try {
    const { data } = await gnewsClient.get("/top-headlines", {
      params: {
        topic,
        country: DEFAULT_COUNTRY,
        lang: DEFAULT_LANGUAGE,
        page,
        max: limit,
      },
    });

    return {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };
  } catch (error) {
    throw new ApiError(HTTP_STATUS.SERVICE_UNAVAILABLE, MESSAGES.NEWS.TOPIC_FAILED);
  }
};

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsByTopic,
};
