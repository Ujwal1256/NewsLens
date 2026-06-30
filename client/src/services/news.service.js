console.log(import.meta.env.VITE_API_URL);

import api from "../api/axios";



export const getTopHeadlines = async (page = 1, limit = 10) => {
  try {
    console.log("Hello")

    const response = await api.get("/news/headlines", {
      params: { page, limit },
    });

    console.log("SUCCESS:", response.data);

    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MESSAGE:", error.message);

    throw error;
  }
};

export const searchNews = async (query) => {
  const response = await api.get("/news/search", {
    params: {
      q: query,
    },
  });

  return response.data;
};

export const getNewsByTopic = async (topic) => {
  const response = await api.get(`/news/topics/${topic}`);

  return response.data;
};