import styled from 'styled-components';
import { breakpoints } from '../../styles/GlobalStyle';

interface CheckoutContainerProps {
  showCheckout: boolean;
}

export const CheckoutContainer = styled.section<CheckoutContainerProps>`
  position: fixed;
  background: var(--background-secondary);
  width: 30rem;
  height: 100vh;
  top: 0;
  z-index: 2;
  right: ${props => props.showCheckout ? 0: '-30rem'};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: right ease-in 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakpoints.md} {
    max-width: 100vw;
    width: 20rem;
  }
`;

export const CheckoutHeader = styled.header`
  padding: 2rem 1rem 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  font-size: 1.2rem;

  button {
    background: var(--black);
    color: var(--white);
    padding: 0.5rem 0.8rem;
    border-radius: 50%;
    font-size: 1.1rem;
    transition: background 0.2s;

    &:hover {
      background: var(--price-background);
    }
  }

  @media ${breakpoints.md} {
    padding: 1.5rem 1rem 1.5rem 1.5rem;
    font-size: 1rem;
    transition: color 0.2s;

    button {
      color: var(--background-secondary);

      &:hover {
        color: var(--white);
      }
    }
  }
`;

export const ProductsContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
  overflow-y: auto;

  @media ${breakpoints.md} {
    padding: 0 2rem;
  }
`;

export const TotalContainer = styled.div`
  padding: 2.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--white);
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 15px;

  @media ${breakpoints.md} {
    font-size: 1.4rem;
  }
`;

export const CheckoutButton = styled.button`
  font-size: 1.75rem;
  color: var(--white);
  background: var(--black);
  padding: 2.5rem 0;
  transition: background 0.2s;



  &:hover {
    background: var(--price-background);
  }

  @media ${breakpoints.md} {
    font-size: 1rem;
  }
`;
