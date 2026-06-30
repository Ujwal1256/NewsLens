const categories = [
  "General",
  "Business",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
  "Science",
];

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
