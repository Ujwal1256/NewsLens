const gnewsClient = require("../../../services/gnews.client");

const getTopHeadlines = async () => {
  const { data } = await gnewsClient.get("/top-headlines", {
    params: {
      country: "in",
      lang: "en",
      max: 10,
    },
  });

  const articles = data.articles.map((article) => ({
    title: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    publishedAt: article.publishedAt,
    source: article.source.name,
  }));

  return {
    totalArticles: data.totalArticles,
    articles,
  };
};

const searchNews = async ({ q, page = 1, limit = 10, lang = "en", country = "in" }) => {
  console.log("Searching for:", q);

  const { data } = await gnewsClient.get("/search", {
    params: {
      q,
      lang,
      max: limit,
      page,
    },
  });

  const articles = data.articles.map((article) => ({
    title: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    source: article.source.name,
    publishedAt: article.publishedAt,
  }));

  return {
    totalArticles: data.totalArticles,
    page,
    limit,
    articles,
  };
};

module.exports = {
  getTopHeadlines,
  searchNews,
};
