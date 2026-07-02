import useBookmarks from "../../hooks/useBookmarks";

import NewsGrid from "../../components/news/NewsGrid";
import EmptyState from "../../components/common/EmptyState";

const Bookmarks = () => {
  const { bookmarks } = useBookmarks();

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="mb-8 text-3xl font-bold">
        Bookmarked Articles
      </h1>

      {bookmarks.length === 0 ? (
        <EmptyState
          title="No bookmarks yet"
          message="Save articles to read later."
        />
      ) : (
        <NewsGrid articles={bookmarks} />
      )}
    </section>
  );
};

export default Bookmarks;