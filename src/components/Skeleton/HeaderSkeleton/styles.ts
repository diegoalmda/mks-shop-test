import styled from 'styled-components';
import { breakpoints } from '../../../styles/GlobalStyle';

export const SkeletonContainer = styled.div`
  height: 6rem;
  width: 100%;

  @media ${breakpoints.md} {
    height: 4rem;
  }
`;
