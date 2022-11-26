import { fireEvent, render, screen } from '@testing-library/react';
import { CartItem } from '.';
import { removeItemFromCart, decreaseItemQuantity, addProductToCart } from '../../store/cart';
import * as redux from 'react-redux';

jest.mock('react-redux');

const cartItem = {
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

describe('CartItem component', () => {
  it('should remove cart item when button has been clicked', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValueOnce(mockDispatchFn);

    render(<CartItem cartItem={cartItem} />);

    const buttonCart = screen.getByTitle('Remover');

    fireEvent.click(buttonCart);

    expect(mockDispatchFn).toHaveBeenCalledWith(removeItemFromCart(cartItem));

    useDispatchSpy.mockClear();
  });

  it('should decrease cart item when button has been clicked', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValueOnce(mockDispatchFn);

    render(<CartItem cartItem={cartItem} />);

    const buttonCart = screen.getByText('-');

    fireEvent.click(buttonCart);

    expect(mockDispatchFn).toHaveBeenCalledWith(decreaseItemQuantity(cartItem));

    useDispatchSpy.mockClear();
  });

  it('should insert item into cart when button has been clicked', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValueOnce(mockDispatchFn);

    render(<CartItem cartItem={cartItem} />);

    const buttonCart = screen.getByText('+');

    fireEvent.click(buttonCart);

    expect(mockDispatchFn).toHaveBeenCalledWith(addProductToCart(cartItem));

    useDispatchSpy.mockClear();
  });
});