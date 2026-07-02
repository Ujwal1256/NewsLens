const NewsCardSkeleton = () => {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md animate-pulse">
      <div className="h-56 w-full bg-gray-300"></div>

      <div className="space-y-4 p-5">
        <div className="h-6 w-3/4 rounded bg-gray-300"></div>

        <div className="h-4 w-full rounded bg-gray-200"></div>

        <div className="h-4 w-5/6 rounded bg-gray-200"></div>

        <div className="flex justify-between">
          <div className="h-4 w-20 rounded bg-gray-300"></div>

          <div className="h-4 w-16 rounded bg-gray-300"></div>
        </div>

        <div className="flex justify-between items-center">
          <div className="h-5 w-24 rounded bg-gray-300"></div>

          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </article>
  );
};

export default NewsCardSkeleton;