import React from 'react';

import Quote from './Quote';

// Custom Hook
import { useAllQuotes } from '../hooks/useAllQuotes';

// Styled component
import { StyledQuotes } from './styles/StyledQuotes';

const Quotes = () => {
  const quotes = useAllQuotes();

  return (
    <StyledQuotes className="container">
      <h2>What people are saying ...</h2>
      <div className="row">
        {quotes.map(({ node: { frontmatter: { author }, html, id } }, i) => (
          <div key={id} className="col-md-6">
            <Quote dark={i % 3 === 0} author={author} quote={html} />
          </div>
        ))}
      </div>
    </StyledQuotes>
  );
};

export default Quotes;
