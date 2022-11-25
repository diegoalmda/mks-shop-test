import { render, screen } from '@testing-library/react';
import { CardsContainer } from '.';

describe('Cards Container component', () => {
  it('should render children components', () => {
    const componentTest = <div data-testid="test_div"></div>;

    render(<CardsContainer>{componentTest}</CardsContainer>);

    const divTest = screen.getByTestId('test_div');

    expect(divTest).toBeInTheDocument();
  });
});