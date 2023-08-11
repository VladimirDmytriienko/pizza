import { combineReducers } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemon';
import { menuApi } from '../services/menu';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
});

export default rootReducer;
