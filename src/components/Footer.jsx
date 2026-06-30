import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            ShopEase
          </h2>

          <p className="mt-4 text-gray-300">
            Your one-stop destination for fashion, electronics,
            jewelry, and much more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Cart
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            📧 support@shopease.com
          </p>

          <p className="text-gray-300 mt-2">
            📞 +91 9876543210
          </p>

          <p className="text-gray-300 mt-2">
            📍 Hyderabad, India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2026 ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;