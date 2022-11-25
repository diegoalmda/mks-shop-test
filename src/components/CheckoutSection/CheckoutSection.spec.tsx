import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { createMock } from 'ts-jest-mock';
import { CheckoutSection } from '.';
import * as redux from 'react-redux';
import { clearCart } from '../../store/cart';

jest.mock('react-redux');

const hideCheckoutMocked = createMock(jest.fn());

const showCheckout = true;

const cartItems = [{
  id: 5,
  name: 'Apple Watch Series 7',
  brand: 'Apple',
  description: 'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
  price: '3200.00',
  createdAt: '2022-08-21T19:30:29.567Z',
  updatedAt: '2022-08-21T19:30:29.567Z',
  quantity: 1
}];

describe('Checkout section component', () => {
  it('should be able to render cart item', () => {
    const useSelectorMocked = createMock(useSelector);

    useSelectorMocked.mockReturnValueOnce(cartItems);

    render(<CheckoutSection hideCheckout={hideCheckoutMocked} showCheckout={showCheckout}  />);

    expect(screen.getByText('Apple Watch Series 7')).toBeInTheDocument();
  });

  it('should hide checkout section when close button has been clicked', () => {
    render(<CheckoutSection hideCheckout={hideCheckoutMocked} showCheckout={showCheckout}  />);

    const closeButton = screen.getByTitle('Fechar');

    fireEvent.click(closeButton);

    expect(hideCheckoutMocked).toHaveBeenCalled();
  });

  it('should clear the cart when button finish order has been clicked', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValueOnce(mockDispatchFn);

    render(<CheckoutSection hideCheckout={hideCheckoutMocked} showCheckout={showCheckout}  />);

    const buttonCart = screen.getByText('Finalizar Compra');

    fireEvent.click(buttonCart);

    expect(mockDispatchFn).toHaveBeenCalledWith(clearCart());

    useDispatchSpy.mockClear();
  });
});