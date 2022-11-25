import styled from 'styled-components';
import { breakpoints } from '../../styles/GlobalStyle';

export const CartProductContainer = styled.div`
  background: var(--white);
  margin: 1.2rem 0;
  border-radius: 0.5rem;
  position: relative;
  padding: 1.2rem;
  font-size: 0.85rem;

  @media ${breakpoints.md} {
    margin: 1rem 0;
    padding: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  font-size: 0.85rem;
  padding: 0.15rem 0.4rem;
  border-radius: 50%;

  background: var(--black);
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    background: var(--price-background);
  }

  @media ${breakpoints.md} {
    padding: 0 0.4rem;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 1.5rem;
    background: none;
    color: var(--black);
    border: 0.3px solid transparent;
    transition: border 0.2s;

    &:hover {
      background: transparent;
      border: 0.3px solid var(--price-background);
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  img {
    margin-right: 1rem;
    width: auto;
    height: 3.5rem;
  }

  @media ${breakpoints.md} {
    flex-direction: column;

    p {
      margin: 0.5rem 0;
    }

    img {
      margin-right: 0;
      width: auto;
      height: 6rem;
    }
  }
`;

export const CartContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media ${breakpoints.md} {
    flex-direction: column;
  }
`;

export const CartItemQuantity = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: var(--black);
  }

  @media ${breakpoints.md} {
    width: 100%;

    strong {
      padding: 0.45rem 0.65rem;
      background: var(--price-background);
      border-radius: 0.3rem;
      height: fit-content;

      font-weight: 700;
      color: var(--white);
    }
  }
`;

export const QuantityValues = styled.div`
  max-width: 4.5rem;
  width: 4.5rem;

  small {
    font-size: 5px;
  }

  @media ${breakpoints.md} {
    max-width: 6.5rem;
    width: 6.5rem;

    small {
      display: none;
    }
  }
`;

export const QuantityButtons = styled.div`
  border: 0.3px solid var(--quantity-button-border);
  border-radius: 0.25rem;
  overflow: hidden;
  color: var(--black);

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    border-right: 0.3px solid var(--quantity-button-border);
    border-left: 0.3px solid var(--quantity-button-border);
    padding: 0.2rem;
    font-size: 0.5rem;
    min-width: 1.5rem;
    text-align: center;
  }

  button {
    padding: 0.2rem 0.55rem;
    background: var(--white);
    color: var(--black);
    font-size: 0.8rem;
  }

  @media ${breakpoints.md} {
    span {
      padding: 0;
      font-size: 0.8rem;
      min-width: 2rem;
    }

    button {
      padding: 0.2rem 0.8rem;
      font-size: 1.2rem;
    }
  }
`;