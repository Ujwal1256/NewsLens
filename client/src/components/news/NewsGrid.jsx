import NewsCard from "./NewsCard";

const NewsGrid = ({ articles }) => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles.map((article) => (
        <NewsCard
          key={article.url}
          article={article}
        />
      ))}
    </section>
  );
};

export default NewsGrid;