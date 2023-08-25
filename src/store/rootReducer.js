import { combineReducers } from '@reduxjs/toolkit';
import { menuApi } from '../services/menu';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [menuApi.reducerPath]: menuApi.reducer,
});

export default rootReducer;
