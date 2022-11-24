import { createSlice } from '@reduxjs/toolkit';

import { CartItemProps } from '../../types/cart';
import { RootState } from '..';

const initialState = {
  items: [] as CartItemProps[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const cartState = [...state.items];
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
    },
    decreaseItemQuantity(state, action) {
      const cartState = [...state.items];
      const itemIndex = cartState.findIndex(cartItem => cartItem.id === action.payload.id);
      const item = cartState[itemIndex];

      if(item.quantity === 1) {
        cartState.splice(itemIndex, 1);
      } else {
        cartState[itemIndex] = {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      state.items = [...cartState];
    },
    removeItemFromCart(state, action) {
      const cartState = state.items.filter(cartItem => cartItem.id !== action.payload.id);
      state.items = [...cartState];
    },
    clearCart(state) {
      state.items = [];
    },

  }
});

export const getAllCartItems = (state: RootState) => state.cart.items;
export const cartQuantityItems = (state: RootState) => state.cart.items.length;

export const { addProductToCart, decreaseItemQuantity, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;