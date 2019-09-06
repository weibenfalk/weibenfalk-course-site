import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #fff;
  color: #4a4a4a;
  margin-bottom: 2.45rem;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;
  /* margin: 0 auto;
  max-width: 1100px; */

  img {
    margin: 0 auto;
    width: 180px;
    height: auto;

    @media (min-width: 575px) {
      width: 250px;
      margin: 0;
    }
  }

  a {
    color: #4a4a4a;
    text-decoration: none;
  }
`;
