import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import NewsImage from "../common/NewsImage";
import useBookmarks from "../../hooks/useBookmarks";

const NewsCard = ({ article }) => {
  const { title, description, source, publishedAt, url } = article;

  const navigate = useNavigate();

  const { toggleBookmark, isBookmarked } = useBookmarks();

  const bookmarked = isBookmarked(url);

  const handleClick = () => {
    navigate(`/news/${encodeURIComponent(url)}`, {
      state: article,
    });
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    toggleBookmark(article);
  };

  return (
    <article
      onClick={handleClick}
      className="cursor-pointer overflow-hidden rounded-xl bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <NewsImage
        src={article.image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="flex flex-col gap-4 p-5">
        <div>
          <h2 className="line-clamp-2 text-xl font-semibold">
            {title}
          </h2>

          <p className="mt-2 line-clamp-3 text-gray-600">
            {description || "No description available."}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{source}</span>

          <span>
            {new Date(publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-medium text-blue-600 transition hover:underline"
          >
            Read More →
          </a>

          <button
            onClick={handleBookmarkClick}
            className="rounded-full p-2 transition hover:bg-gray-100"
            aria-label="Bookmark article"
          >
            {bookmarked ? (
              <FaBookmark
                size={18}
                className="text-yellow-500"
              />
            ) : (
              <FaRegBookmark
                size={18}
                className="text-gray-600"
              />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;