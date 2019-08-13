/* eslint-disable react/no-danger */
import React from 'react';

// Styled Component
import { StyledQuote } from './styles/StyledQuote';

const Quote = ({ dark, author, quote }) => (
  <StyledQuote dark={dark}>
    <div dangerouslySetInnerHTML={{ __html: quote }} />
    <h5>{author}</h5>
  </StyledQuote>
);

export default Quote;
