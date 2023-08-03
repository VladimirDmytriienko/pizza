import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import cartReducer from '../features/cartSlice';
import menuReducer from '../features/menuSlice'
const rootReducer = combineReducers({
  products: productsReducer,
  menu: menuReducer,
  cart: cartReducer,
});

export default rootReducer;
