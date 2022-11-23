// import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { api } from '../../services/api';
import { IProductData } from '../../types/product';
// import { getProductsList } from '../products';

// export function getAllProducts() {
//   return (dispatch: AppDispatch) => {
//     api
//       .get('products?page=1&rows=8&sortBy=id&orderBy=ASC')
//       .then(response => {
//         const data = response.data.products as IProductData[];
//         dispatch(getProductsList(data));
//       })
//       .catch(err => console.log(err));
//   };
// }

// export const getAllProducts = createAsyncThunk('fetch/products', async () => {
//   try {
//     const response = await api.get('products?page=1&rows=8&sortBy=id&orderBy=ASC');
//     return [...response.data.products];
//   } catch (err) {
//     return null;
//   }
// });