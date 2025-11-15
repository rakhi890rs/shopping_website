import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axiosconfig";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: ""
  });

  useEffect(() => {
    axios.get(`/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`/product/${id}`, product);
    alert("Product Updated Successfully!!");
    navigate("/products");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Update Product</h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="name" value={product.name} onChange={handleChange} className="border p-2" />

        <input name="price" value={product.price} onChange={handleChange} className="border p-2" />

        <input name="image" value={product.image} onChange={handleChange} className="border p-2" />

        <textarea name="description" value={product.description} onChange={handleChange} className="border p-2"></textarea>

        <input name="category" value={product.category} onChange={handleChange} className="border p-2" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
