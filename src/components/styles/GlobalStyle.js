import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    color: #4a4a4a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }
  h2 {
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    color: inherit;
    font-family: 'Maven Black', Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    line-height: 1.1;
    text-align: center;

    @media (min-width: 768px) { text-align: left; }
    @media (min-width: 1200px) { font-size: 3rem; }
  }
  h3 {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: 'Maven Black', Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.2rem;
    line-height: 1.1;
  }
  h4 {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: 'Maven Regular', Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;

    @media (min-width: 768px) { text-align: left; }
    @media (min-width: 1200px) { font-size: 2.2rem; }
  }
  h5 {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.78405rem;
    line-height: 1.1;
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 1.45rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 26px;
    text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

    @media (min-width: 1200px) {
      font-size: 1.2rem;
  }

    @media (min-width: 1200px) {  }
  }
`;
