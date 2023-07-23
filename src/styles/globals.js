import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: Quicksand, 'sans-serif';
  }

  button, html, input, textarea {
    font: 16px Quicksand;
  }

  button {
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;