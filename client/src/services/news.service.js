import api from "../api/axios";

export const getTopHeadlines = async (page = 1, limit = 10) => {
  const response = await api.get("/news/headlines", {
    params: {
      page,
      limit,
    },
  });

  return response.data.data;
};

export const searchNews = async (query) => {
  const response = await api.get("/news/search", {
    params: {
      q: query,
    },
  });

  return response.data.data;
};

export const getNewsByCategory = async (category) => {
  const response = await api.get(`/news/topics/${category}`);

  return response.data.data;
};