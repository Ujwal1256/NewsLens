import { ArrowLeft, Calendar, ExternalLink, Newspaper } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NewsImage from "../common/NewsImage";
const NewsDetailsCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="p-6 md:p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back to News
        </button>

        <NewsImage
          src={article.image}
          alt={article.title}
          className="mb-8 max-h-[550px] w-full rounded-xl bg-gray-100 object-contain"
        />

        <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          {article.title}
        </h1>

        <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Newspaper size={18} />
            <span className="font-medium">{article.source}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <p className="mb-10 text-lg leading-9 text-gray-700">
          {article.description || "No description available for this article."}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
        >
          Read Original Article
          <ExternalLink size={18} />
        </a>
      </div>
    </article>
  );
};

export default NewsDetailsCard;
