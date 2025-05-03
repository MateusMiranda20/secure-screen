import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;