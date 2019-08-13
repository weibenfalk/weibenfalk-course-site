import styled from 'styled-components';

export const StyledCourseCard = styled.div`
  background: #fff;
  min-height: 200px;
  margin: 20px 0;
  padding: 40px;
  border-radius: 40px;
  box-shadow: 5px 6px rgba(124, 181, 201, 0.5);
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h4 {
    color: #40869e;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 26px;
    margin: 0 0 40px 0;
  }
`;
