const FilterBar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sort,
  setSort,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="all">All Categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}

      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
        <option value="az">Name: A → Z</option>
        <option value="za">Name: Z → A</option>
      </select>

    </div>
  );
};

export default FilterBar;