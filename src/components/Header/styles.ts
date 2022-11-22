import styled from 'styled-components';
import { breakpoints } from '../../styles/GlobalStyle';

export const HeaderContainer = styled.div`
  background: var(--background-secondary);
  height: 6rem;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;

  @media ${breakpoints.md} {
    height: 4rem;
  }
`;

export const HeaderContent = styled.header`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const LogoContainer = styled.div`
  color: var(--white);
  display: flex;
  align-items: baseline;

  h1 {
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

export const ButtonCart = styled.button`
  background: var(--white);
  color: var(--black);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  img {
    width: 1.2rem;
    margin-right: 1.5rem;
  }

  strong {
    font-size: 1.125rem;
  }

  @media ${breakpoints.md} {
    padding: 0.25rem 0.8rem;

    img {
      width: 0.8rem;
      margin-right: 0.8rem;
    }

    strong {
      font-size: 0.8rem;
    }
  }
`;