import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
  html {
    font-size: 15px;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin-top: 0;
    font-family: 'Poppins',sans-serif;
  }

  body {
    font-family: 'Fira Sans',sans-serif;
    margin: 0;
    padding: 0;
    font-size: 15px;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

`;
export default ResetCSS;
