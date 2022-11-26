import reducer, { addProductToCart, decreaseItemQuantity, removeItemFromCart, clearCart, getAllCartItems } from '../../store/cart';
import { CartItemProps } from '../../types/cart';

const product = {
  id: 5,
  name: 'Apple Watch Series 7',
  brand: 'Apple',
  description: 'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
  price: '3200.00',
  createdAt: '2022-08-21T19:30:29.567Z',
  updatedAt: '2022-08-21T19:30:29.567Z',
  quantity: 1
};

describe('Cart State', () => {
  it('should add product to cart', () => {
    const prevState = {
      items: [] as CartItemProps[],
    };
    expect(reducer(prevState, addProductToCart(product))).toEqual({
      items: [product]
    });
  });

  it('should decrease product quantity', () => {
    const prevState = {
      items: [
        {
          ...product,
          quantity: 2
        }
      ],
    };
    expect(reducer(prevState, decreaseItemQuantity(product))).toEqual({
      items: [product]
    });
  });

  it('should remove product from cart', () => {
    const prevState = {
      items: [
        {
          ...product,
          quantity: 2
        }
      ],
    };
    expect(reducer(prevState, removeItemFromCart(product))).toEqual({
      items: []
    });
  });

  it('should clear cart', () => {
    const prevState = {
      items: [
        {
          ...product,
          quantity: 2
        }
      ],
    };
    expect(reducer(prevState, clearCart())).toEqual({
      items: []
    });
  });
});