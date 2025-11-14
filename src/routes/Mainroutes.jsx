import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import CreateProduct from "../pages/product/CreateProduct.jsx";
import UpdateProduct from "../pages/product/UpdateProduct.jsx";


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} /> {/* lowercase path for consistency */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/update-product/:id" element={<UpdateProduct />} /> {/* fixed typo */}
    </Routes>
  );
};

export default Mainroutes;
