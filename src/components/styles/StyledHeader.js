import styled from 'styled-components';

export const StyledHeader = styled.header`
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

export const StyledHeaderContainer = styled.div`
  padding: 0;
  /* margin: 0 auto;
  max-width: 1100px; */
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: block;
  }

  img {
    margin: 0 auto;
    width: 180px;
    height: auto;

    @media (min-width: 575px) {
      width: 300px;
      margin: 0 -3px;
    }
  }

  a {
    color: #4a4a4a;
    text-decoration: none;
  }
`;
