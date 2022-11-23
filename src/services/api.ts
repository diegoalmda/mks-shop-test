// import { IProductData } from '../types/product';
import axios from 'axios';

const BASE_URL = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// async function getAllProducts(): Promise<IProductData[] | null> {
//   try {
//     const response = await api.get('products?page=1&rows=8&sortBy=id&orderBy=ASC');

//     if(response) {
//       return response.data.products;
//     }
//     return [] as IProductData[];

//   } catch (error) {
//     return null;
//   }
// }