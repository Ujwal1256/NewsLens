import { Navigate, useLocation } from "react-router-dom";
import NewsDetailsCard from "../../components/news/NewsDetailsCard";

const NewsDetails = () => {
  const { state: article } = useLocation();

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <NewsDetailsCard article={article} />
    </section>
  );
};

export default NewsDetails;