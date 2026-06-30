import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">
          🛒 Your Cart is Empty
        </h1>

        <p className="text-gray-500 mb-8">
          Looks like you haven't added anything yet.
        </p>

        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2">

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 mb-6 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div>
                  <h2 className="font-semibold text-lg">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 capitalize mt-2">
                    {item.category}
                  </p>

                  <p className="text-blue-600 text-xl font-bold mt-2">
                    ${item.price}
                  </p>
                </div>

              </div>

              <div className="flex flex-col items-center gap-4">

                {/* Quantity */}

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-200 w-9 h-9 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="text-lg font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-200 w-9 h-9 rounded-full hover:bg-gray-300"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Order Summary */}

        <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-24">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Items</span>

            <span>
              {cart.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}
            </span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>

            <span className="text-green-600">
              Free
            </span>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-2xl font-bold">

            <span>Total</span>

            <span className="text-blue-600">
              ${total.toFixed(2)}
            </span>

          </div>

          <button
            className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Proceed to Checkout
          </button>

          <Link
            to="/products"
            className="block text-center mt-4 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg transition"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Cart;