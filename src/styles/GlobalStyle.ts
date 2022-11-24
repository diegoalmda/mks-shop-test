import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  md: '(max-width: 720px)',
  lg: '(max-width: 1290px)',
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --background-secondary: #0F52BA;

    --text-primary: #2C2C2C;

    --price-background: #373737;
    --footer-background: #EEEEEE;
    --quantity-button-border: #BFBFBF;
    --disabled-button-background: #777777;

    --black: #000000;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    @media ${breakpoints.lg} {
      font-size: 93.75%;
    }

    @media ${breakpoints.md} {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text-primary);
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      cursor: not-allowed;
      background: var(--disabled-button-background);

      &:hover {
        background: var(--disabled-button-background);
        filter: brightness(1);
      }
    }
  }
`;