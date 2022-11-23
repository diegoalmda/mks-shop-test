import { createAction, createReducer } from '@reduxjs/toolkit';
import { IProductData } from '../../types/product';

// type Action = {
//   type: keyof typeof actions,
//   payload?: Array<IProductData>
// }

const INITIAL_STATE: IProductData[] = [];

export const getProductsList = createAction<IProductData[]>('GET_LIST');

export const productsReducer = createReducer(INITIAL_STATE, {
  [getProductsList.type]: (state, action) => [...state, action.payload],
});