import styled from 'styled-components';
import { breakpoints } from '../../styles/GlobalStyle';

export const Container = styled.main`
  max-width: 1080px;
  height: auto;
  margin: 8rem auto;
  padding: 0 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.375rem;

  @media ${breakpoints.md} {
    margin: 5rem auto;
    gap: 1rem;
  }
`;
