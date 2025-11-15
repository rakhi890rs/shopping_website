// src/pages/product/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../api/axiosconfig.jsx";
import { addToCart } from "../../store/reducers/cartSlice.js";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user); // get logged-in user
  const [product, setProduct] = useState(null);

  // Fetch single product
  const getProduct = async () => {
    try {
      const res = await axios.get(`/product/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
      setProduct("not-found");
    }
  };

  // Delete product
  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`/product/${id}`);
      alert("Product deleted successfully!");
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };

  // Add to cart
  const addToCartHandler = () => {
    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  useEffect(() => {
    getProduct();
  }, []);

  // Loading
  if (product === null) return <h1 className="p-10 text-xl">Loading...</h1>;

  // Not found
  if (product === "not-found")
    return (
      <h1 className="p-10 text-xl text-red-600">Product Not Found</h1>
    );

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-bold mt-4">Price: ₹{product.price}</p>
      <p className="text-blue-600 mt-1">Category: {product.category}</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        {/* Admin: Edit / Delete */}
        {currentUser?.isAdmin && (
          <>
            <Link
              to={`/admin/update-product/${product.id}`}
              className="bg-yellow-900 text-white px-4 py-2 rounded"
            >
              Edit
            </Link>
            <button
              onClick={deleteHandler}
              className="bg-red-900 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </>
        )}

        {/* Normal User: Add to Cart */}
        {!currentUser?.isAdmin && (
          <button
            onClick={addToCartHandler}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        )}

        {/* Back Button */}
        <button
          onClick={() => navigate("/products")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
