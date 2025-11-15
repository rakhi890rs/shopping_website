// src/store/reducers/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state, action) => {
      state.carts = action.payload;
    },
    addToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.carts = [];
    },
  },
});

// ✅ Export all actions
export const { loadCart, addToCart, removeFromCart, clearCart } = cartSlice.actions;

// ✅ Export reducer
export default cartSlice.reducer;
