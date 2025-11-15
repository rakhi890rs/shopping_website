import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

import ProductDetails from "../pages/product/ProductDetails.jsx";
import CreateProduct from "../pages/product/CreateProduct.jsx";
import UpdateProduct from "../pages/product/UpdateProduct.jsx";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/ProductDetail/:id" element={<ProductDetails />} />   {/* FIXED */}
    </Routes>
  );
};

export default Mainroutes;
