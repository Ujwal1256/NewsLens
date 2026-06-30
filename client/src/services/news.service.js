import newsData from "../data/news.json";

export const getTopHeadlines = async () => {
  return newsData.data;
};

export const searchNews = async (query) => {
  console.log(query);

  return newsData.data;
};

export const getNewsByCategory = async (category) => {
  console.log(category);

  return newsData.data;
};