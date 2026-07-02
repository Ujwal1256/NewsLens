import { useState } from "react";

import useNews from "../../hooks/useNews";

import SearchBar from "../../components/news/SearchBar";
import CategoryTabs from "../../components/news/CategoryTabs";
import NewsGrid from "../../components/news/NewsGrid";
import NewsGridSkeleton from "../../components/news/NewsGridSkeleton";

import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";

const Home = () => {
  const {
    articles,
    loading,
    error,
    fetchNews,
    searchArticles,
    filterByCategory,
  } = useNews();

  const [activeCategory, setActiveCategory] = useState("General");

  const pageTitle = "Top Headlines";

  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchNews();
      return;
    }

    await searchArticles(query);
  };

  const handleCategoryChange = async (category) => {
  console.log("Selected Category:", category);

  setActiveCategory(category);

  if (category === "General") {
    await fetchNews();
    return;
  }

  await filterByCategory(category);
};

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="mb-8 text-3xl font-bold">{pageTitle}</h1>

      <SearchBar onSearch={handleSearch} />

      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {loading ? (
        <NewsGridSkeleton />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchNews} />
      ) : articles.length === 0 ? (
        <EmptyState
          title="No articles found"
          message="Try searching for another topic or check back later."
        />
      ) : (
        <NewsGrid articles={articles} />
      )}
    </section>
  );
};

export default Home;
