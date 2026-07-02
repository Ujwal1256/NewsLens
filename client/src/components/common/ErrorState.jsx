const ErrorState = ({ message, onRetry }) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="mb-3 text-3xl">⚠️</h2>

      <h3 className="text-xl font-semibold">
        Unable to load news
      </h3>

      <p className="mt-2 max-w-md text-gray-600">
        {message}
      </p>

      <button
        onClick={onRetry}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Retry
      </button>
    </section>
  );
};

export default ErrorState;