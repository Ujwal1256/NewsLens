const gnewsClient = require("../../../services/gnews.client");

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
};

const searchNews = async ({ q, page = 1, limit = 10, lang = "en" }) => {
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
};

const getNewsByTopic = async (topic, { page = 1, limit = 10 }) => {
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
};

module.exports = {
  getTopHeadlines,
  searchNews,
  getNewsByTopic,
};
