import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { CartItemProps } from '../../types/product';

const initialState = {
  items: [] as CartItemProps[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      // state.items.push(action.payload);

      const cartState = state.items;

      const itemIndex = cartState.findIndex(cartItem => cartItem.id === action.payload.id);

      if(itemIndex < 0) {
        cartState.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        const item = cartState[itemIndex];
        cartState[itemIndex] = {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      state.items = [...cartState];
    }
  }
});

export const getAllCartItems = (state: RootState) => state.cart.items;
export const cartQuantityItems = (state: RootState) => state.cart.items.length;

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;