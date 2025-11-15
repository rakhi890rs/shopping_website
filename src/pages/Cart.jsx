import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearHandler = () => {
    if (window.confirm("Clear all items from cart?")) {
      dispatch(clearCart());
    }
  };

  if (cartItems.length === 0)
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl mb-4">Your cart is empty!</h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Shop Now
        </button>
      </div>
    );

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 border rounded shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-1">₹{item.price}</p>
            </div>
            <button
              onClick={() => removeHandler(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Total: ₹{totalPrice}</h2>
        <div className="flex gap-4">
          <button
            onClick={clearHandler}
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
          <button
            onClick={() => alert("Proceeding to checkout...")}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
