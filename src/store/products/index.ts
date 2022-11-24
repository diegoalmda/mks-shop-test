import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '..';
import { api } from '../../services/api';
import { IProductData } from '../../types/product';

const initialState = {
  products: [] as IProductData[],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed';
};

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  const response = await api.get('products?page=1&rows=8&sortBy=id&orderBy=ASC');
  return response.data.products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export const getAllProducts = (state: RootState) => state.products;
export const getProductsStatus = (state: RootState) => state.products.status;

export default productsSlice.reducer;