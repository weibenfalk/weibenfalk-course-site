import styled from 'styled-components';

export const StyledCourseCard = styled.div`
  background: #fff;
  min-height: 200px;
  margin: 20px 0;
  padding: 40px;
  border-radius: 40px;
  box-shadow: 5px 6px rgba(124, 181, 201, 0.5);
  text-align: center;

  a {
    display: block;
    margin: 0 0 20px 0;

    @media (min-width: 768px) {
      display: inline;
      margin: 0 10px 10px 0;
    }
  }

  @media (min-width: 768px) {
    text-align: left;
  }

  h4 {
    color: #40869e;
  }

  p {
    display: none;

    @media (min-width: 575px) {
      text-align: left;
      display: block;
    }
  }
`;
