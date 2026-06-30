import useNews from "../../hooks/useNews";

import SearchBar from "../../components/news/SearchBar";
import CategoryTabs from "../../components/news/CategoryTabs";
import NewsGrid from "../../components/news/NewsGrid";

const Home = () => {
  const { articles, loading, error } = useNews();

  const handleSearch = (query) => {
    console.log(query);
  };

  const handleCategoryChange = (category) => {
    console.log(category);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Top Headlines
      </h1>

      <SearchBar onSearch={handleSearch} />

      <CategoryTabs
        activeCategory="General"
        onCategoryChange={handleCategoryChange}
      />

      <NewsGrid articles={articles} />
    </section>
  );
};

export default Home;