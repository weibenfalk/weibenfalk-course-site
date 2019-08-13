import React from 'react';
import { GlobalStyle } from './src/components/styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap-grid.css';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
