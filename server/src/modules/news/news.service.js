const gnewsClient = require("../../../services/gnews.client");
const ApiError = require("../../utils/ApiError");

const formatArticles = (articles) => {
  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    publishedAt: article.publishedAt,
    source: article.source.name,
  }));
};

const getTopHeadlines = async ({ page = 1, limit = 10 }) => {
  try {
    const { data } = await gnewsClient.get("/top-headlines", {
      params: {
        country: "in",
        lang: "en",
        max: limit,
        page,
      },
    });

    return {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };
  } catch (error) {
    throw new ApiError(503, "Unable to fetch top headlines");
  }
};

const searchNews = async ({ q, page = 1, limit = 10, lang = "en" }) => {
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
    throw new ApiError(503, "Unable to search news");
  }
};

const getNewsByTopic = async (topic, { page = 1, limit = 10 }) => {
  try {
    const { data } = await gnewsClient.get("/top-headlines", {
      params: {
        topic,
        country: "in",
        lang: "en",
        max: limit,
        page,
      },
    });

    return {
      totalArticles: data.totalArticles,
      page,
      limit,
      articles: formatArticles(data.articles),
    };
  } catch (error) {
    throw new ApiError(503, "Unable to fetch news by topic");
  }
};

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsByTopic,
};
