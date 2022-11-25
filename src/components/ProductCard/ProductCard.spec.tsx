import { fireEvent, render, screen } from '@testing-library/react';
import { ProductCard } from '.';
import { addProductToCart } from '../../store/cart';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

const product = {
  id: 5,
  name: 'Apple Watch Series 7',
  brand: 'Apple',
  description: 'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
  price: '3200.00',
  createdAt: '2022-08-21T19:30:29.567Z',
  updatedAt: '2022-08-21T19:30:29.567Z',
};

describe('Product card component', () => {
  it('should be able to render product information in card', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText('Apple Watch Series 7')).toBeInTheDocument();
  });

  it('should be able to add product to cart when button has been clicked', () => {
    render(<ProductCard product={product} />);

    const addToCartButton = screen.getByText('COMPRAR');

    fireEvent.click(addToCartButton);

    expect(mockDispatch).toHaveBeenCalledWith(addProductToCart(product));
  });
});