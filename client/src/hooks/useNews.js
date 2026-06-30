import { useEffect, useState } from "react";
import { getTopHeadlines } from "../services/news.service";

const useNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    try {
      setLoading(true);

      const data = await getTopHeadlines();

      setArticles(data.articles);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return {
    articles,
    loading,
    error,
    fetchNews,
  };
};

export default useNews;