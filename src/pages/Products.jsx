import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../services/api";

import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (selectedCategory !== "all") {
      data = data.filter((item) => item.category === selectedCategory);
    }

    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sort) {
      case "low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "az":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "za":
        data.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }

    return data;
  }, [products, search, selectedCategory, sort]);

  if (loading) {
    return (
      <h2 className="text-center text-2xl py-20">
        Loading Products...
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sort={sort}
          setSort={setSort}
        />

      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center text-2xl py-20 text-gray-500">
          No Products Found 😔
        </div>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
};

export default Products;