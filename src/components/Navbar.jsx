import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          ShopEase
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Cart
          </Link>
        </nav>

        {/* Search Box */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
          <FaSearch className="text-gray-500 mr-2" />

          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">

          <FaShoppingCart
            size={28}
            className="text-gray-700 hover:text-blue-600 transition"
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>

        </Link>

      </div>
    </header>
  );
};

export default Navbar;