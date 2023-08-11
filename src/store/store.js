// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../services/pokemon';
import { menuApi } from '../services/menu';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, menuApi.middleware),
});

setupListeners(store.dispatch);

export default store;
