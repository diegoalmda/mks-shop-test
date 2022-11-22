import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  min-width: 13.75rem;
  width: 14.75rem;
  min-height: 18rem;
  height: 20rem;
  background: var(--white);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 0.875rem 0;

  small {
    font-size: 0.6rem;
    font-weight: 300;
    margin: 0.7rem 0;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  p {
    margin-right: 0.2rem;
  }

  strong {
    padding: 0.25rem;
    background: var(--price-background);
    border-radius: 0.3rem;
    height: fit-content;

    font-weight: 700;
    color: var(--white);
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  border: none;
  background: var(--background-secondary);
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;


  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white);

  img {
    margin-right: 0.6rem;
  }
`;