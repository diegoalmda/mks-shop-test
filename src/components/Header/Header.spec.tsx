import { fireEvent, render, screen } from '@testing-library/react';
import { createMock } from 'ts-jest-mock';
import { Header } from '.';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

const showCheckoutMocked = createMock(jest.fn());

describe('Header component', () => {
  it('execute function when button has been clicked', () => {
    const useSelectorMocked = createMock(useSelector);

    useSelectorMocked.mockReturnValue(4);

    render(<Header showCheckout={showCheckoutMocked} />);

    const buttonCart = screen.getByRole('button');

    fireEvent.click(buttonCart);

    expect(showCheckoutMocked).toHaveBeenCalled();
  });

  it('cart button shows correct quantity of cart items', () => {
    render(<Header showCheckout={showCheckoutMocked} />);

    // screen.logTestingPlaygroundURL();

    expect(screen.getByText('4')).toBeInTheDocument();
  });
});