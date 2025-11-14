import axios from '../../api/axiosconfig.jsx';
import { loadProducts, addProduct } from '../reducers/productSlice.js';

// Load all products
export const asyncloadproduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/product");
    dispatch(loadProducts(data));
  } catch (error) {
    console.log("Error loading products:", error);
  }
};

// Create product
export const asynccreateproduct = (product) => async (dispatch) => {
  try {
    const { data } = await axios.post("/product", product);
    dispatch(addProduct(data)); // <-- important!
  } catch (error) {
    console.log("Error creating product:", error);
  }
};
