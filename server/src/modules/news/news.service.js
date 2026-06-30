const gnewsClient = require("../../../services/gnews.client");
const ApiError = require("../../utils/ApiError");
const cache = require("../../utils/cache");
const logger = require("../../utils/logger");

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

const handleApiError = (error, defaultMessage) => {
  const status = error.response?.status || HTTP_STATUS.SERVICE_UNAVAILABLE;

  const message = error.response?.data?.errors?.join(", ") || defaultMessage;

  logger.error(message);

  throw new ApiError(status, message);
};

const getTopHeadlines = async ({ page = DEFAULT_PAGE, limit = DEFAULT_LIMIT }) => {
  const cacheKey = `top-headlines-${page}-${limit}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    logger.info("Top headlines served from cache");
    return cachedData;
  }

  try {
    const { data } = await gnewsClient.get("/top-headlines", {
      params: {
        country: DEFAULT_COUNTRY,
        lang: DEFAULT_LANGUAGE,
        page,
        max: limit,
      },
    });

    const result = {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };

    cache.set(cacheKey, result);

    logger.info("Top headlines fetched from GNews API");

    return result;
  } catch (error) {
    handleApiError(error, MESSAGES.NEWS.TOP_HEADLINES_FAILED);
  }
};

const searchNews = async ({
  q,
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  lang = DEFAULT_LANGUAGE,
}) => {
  const cacheKey = `search-${q}-${page}-${limit}-${lang}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    logger.info("Search results served from cache");
    return cachedData;
  }

  try {
    const { data } = await gnewsClient.get("/search", {
      params: {
        q,
        lang,
        page,
        max: limit,
      },
    });

    const result = {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };

    cache.set(cacheKey, result);

    logger.info("Search results fetched from GNews API");

    return result;
  } catch (error) {
    handleApiError(error, MESSAGES.NEWS.SEARCH_FAILED);
  }
};

const getNewsByTopic = async (topic, { page = DEFAULT_PAGE, limit = DEFAULT_LIMIT }) => {
  const cacheKey = `topic-${topic}-${page}-${limit}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    logger.info(`${topic} news served from cache`);
    return cachedData;
  }

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

    const result = {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };

    cache.set(cacheKey, result);

    logger.info(`${topic} news fetched from GNews API`);

    return result;
  } catch (error) {
    handleApiError(error, MESSAGES.NEWS.TOPIC_FAILED);
  }
};

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsByTopic,
};
