import { FaRegBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import NewsImage from "../common/NewsImage";

const NewsCard = ({ article }) => {
  const { title, description, image, source, publishedAt, url } = article;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/news/${encodeURIComponent(article.url)}`, {
      state: article,
    });
  };
  return (
    <article
      onClick={handleClick}
      className="cursor-pointer overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-1 hover:shadow-lg"
    >
      <NewsImage
        src={article.image}
        alt={article.title}
        className="h-52 w-full object-cover"
      />
      <div className="flex flex-col gap-4 p-5">
        <div>
          <h2 className="line-clamp-2 text-xl font-semibold">{title}</h2>

          <p className="mt-2 line-clamp-3 text-gray-600">{description}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{source}</span>

          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Read More →
          </a>

          <button className="rounded-full p-2 transition hover:bg-gray-100">
            <FaRegBookmark size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
