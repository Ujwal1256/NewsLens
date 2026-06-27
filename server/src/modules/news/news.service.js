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

module.exports = {
  getTopHeadlines,
};