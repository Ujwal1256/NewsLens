import NewsCardSkeleton from "./NewsCardSkeleton";

const NewsGridSkeleton = ({ count = 8 }) => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </section>
  );
};

export default NewsGridSkeleton;