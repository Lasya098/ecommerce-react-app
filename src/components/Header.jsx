import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link to="/" className="text-3xl font-bold text-indigo-600">
          ShopEasy
        </Link>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        <nav className="flex items-center gap-8">

          <Link className="hover:text-indigo-600" to="/">
            Home
          </Link>

          <Link className="hover:text-indigo-600" to="/products">
            Products
          </Link>

          <Link
            to="/cart"
            className="relative text-2xl"
          >
            <FaShoppingCart />

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
              {totalItems}
            </span>
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Header;