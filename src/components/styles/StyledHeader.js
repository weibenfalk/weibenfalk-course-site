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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    /* display: block; */
    flex-direction: row;
    justify-content: space-between;
  }

  .social {
    a {
      margin: 5px;
      img {
        max-width: 40px;

        @media (max-width: 600px) {
          max-width: 30px;
        }
      }
    }
  }

  img {
    margin: 0 auto;
    width: 180px;
    height: auto;

    @media (min-width: 575px) {
      width: 250px;
      margin: 0 0 20px 7px;
    }
  }

  a {
    color: #4a4a4a;
    text-decoration: none;
  }
`;
