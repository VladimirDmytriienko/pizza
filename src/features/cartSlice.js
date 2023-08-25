import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.value.findIndex((item) => item.name === product.name);
      if (index !== -1) {
        state.value.splice(index, 1);
      } else {
        state.value.push({...product, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const product = action.payload;
      const index = state.value.findIndex((item) => item.name === product.name);
      state.value[index].quantity++
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const index = state.value.findIndex((item) => item.name === product.name);
      state.value[index].quantity--
    },
    clearCart: (state, action) => {
      state.value = []
    }
    
  },
});

export const { addToCart, increaseQuantity,  decreaseQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
