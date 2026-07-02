const EmptyState = ({ title, message }) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 text-6xl">📰</div>

      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mt-3 max-w-md text-gray-600">
        {message}
      </p>
    </section>
  );
};

export default EmptyState;