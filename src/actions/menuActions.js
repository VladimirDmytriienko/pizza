import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMenuData = createAsyncThunk('menu/fetchMenuData', async () => {
  try {
    const response = await axios.get('https://demo8823583.mockable.io/');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch menu data.');
  }
});
