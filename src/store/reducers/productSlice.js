import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Load all products
    loadProducts: (state, action) => {
      state.products = action.payload
    },

    // Add new product
    addProduct: (state, action) => {
      state.products.push(action.payload)
    }
  },
})

export const { loadProducts, addProduct } = productSlice.actions
export default productSlice.reducer
