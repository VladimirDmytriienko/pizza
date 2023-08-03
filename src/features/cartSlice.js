import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.value.findIndex((item) => item.name === action.payload.name);
      if (index !== -1) {
        state.value.splice(index, 1);
      } else {
        state.value.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
