import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

      {/* Product Image */}
      <div className="bg-gray-100 h-60 flex items-center justify-center p-5">

        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain group-hover:scale-110 transition duration-300"
        />

      </div>

      {/* Product Details */}
      <div className="p-5">

        <h2 className="font-semibold text-lg text-gray-800 line-clamp-2 h-14">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 capitalize mt-2">
          {product.category}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-3">

          <FaStar className="text-yellow-400" />

          <span className="ml-2 text-gray-600">
            {product.rating?.rate} ({product.rating?.count})
          </span>

        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-5">

          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;