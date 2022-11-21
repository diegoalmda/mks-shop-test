import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --background-secondary: #0F52BA;

    --text-primary: #2C2C2C;

    --price-background: #373737;
    --footer-background: #EEEEEE;

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
    @media (max-width: 1290px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text-primary);
    font-weight: 400;
  }

  header, main {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;