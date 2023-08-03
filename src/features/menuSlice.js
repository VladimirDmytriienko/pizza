import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMenuData = createAsyncThunk('menu/fetchMenuData', async () => {
  try {
    const response = await axios.get('https://demo8823583.mockable.io/');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch menu data.');
  }
});

const initialState = {
  pizzas: [],
  drinks: [],
  desserts: [],
  sides: [],
  status: 'idle',
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuData: (state, action) => {
      state.pizzas = action.payload.pizzas;
      state.drinks = action.payload.drinks;
      state.desserts = action.payload.desserts;
      state.sides = action.payload.sides;
      state.status = 'succeeded';
    },
    setMenuError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenuData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pizzas = action.payload.pizzas;
        state.drinks = action.payload.drinks;
        state.desserts = action.payload.desserts;
        state.sides = action.payload.sides;
      })
      .addCase(fetchMenuData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setMenuData, setMenuError } = menuSlice.actions;

export default menuSlice.reducer;
