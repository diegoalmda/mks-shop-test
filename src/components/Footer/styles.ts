import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 100%;
  height: 2rem;

  font-size: 0.75rem;
  background: var(--footer-background);
  color: var(--black);

  position: fixed;
  width: 100%;
  bottom: 0;
`;