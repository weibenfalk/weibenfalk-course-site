import styled from 'styled-components';

export const StyledHero = styled.div`
  margin: 0 0 40px 0;
  text-align: center;

  p {
    margin-bottom: 2.45rem;
  }

  .hero-image-wrapper {
    /* padding: 0; */
  }

  @media (min-width: 576px) {
    ...;
  }

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 992px) {
    ...;
  }

  @media (min-width: 1200px) {
    ...;
  }
`;