import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: 'Sora', sans-serif;
    background: #f6f5fc;
  }

  button{
    cursor: pointer;
  }

`;
