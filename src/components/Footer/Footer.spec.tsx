import { render, screen } from '@testing-library/react';
import { Footer } from '.';

describe('Footer component', () => {
  it('should render component correctly', () => {
    render(<Footer />);

    expect(screen.getByText(/MKS sistemas/i)).toBeInTheDocument();
  });
});