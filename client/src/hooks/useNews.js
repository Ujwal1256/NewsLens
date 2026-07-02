import { useEffect, useState } from "react";

import {
  getTopHeadlines,
  searchNews,
  getNewsByCategory,
} from "../services/news.service";

const useNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeRequest = async (request) => {
    try {
      setLoading(true);
      setError(null);

      const data = await request();

      setArticles(data.articles);
    } catch (error) {
      console.error("News Request Error:", error);

      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Something went wrong.";

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = () => executeRequest(() => getTopHeadlines());

  const searchArticles = (query) => executeRequest(() => searchNews(query));

  const filterByCategory = (category) =>
    executeRequest(() => getNewsByCategory(category.toLowerCase()));

  useEffect(() => {
    fetchNews();
  }, []);

  return {
    articles,
    loading,
    error,
    fetchNews,
    searchArticles,
    filterByCategory,
  };
};

export default useNews;
