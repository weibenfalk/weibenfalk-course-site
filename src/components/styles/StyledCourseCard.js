import styled from 'styled-components';

export const StyledCourseCard = styled.div`
  background: #fff;
  min-height: 200px;
  margin: 20px 0 40px 0;
  padding: 40px;
  border-radius: 40px;
  box-shadow: 5px 6px rgba(124, 181, 201, 0.5);
  text-align: center;

  h6 {
    background: #d7e7ec;
    max-width: 220px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    color: #fff;
  }

  .course-image {
    width: 70%;
    margin: 20px auto;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

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
    font-family: 'Arial';
  }

  h5 {
    font-family: 'Arial';
    font-size: 1.2rem;
  }

  p {
    display: none;
    font-size: 1.1rem;
    line-height: 1.6rem;

    @media (min-width: 575px) {
      text-align: left;
      display: block;
    }
  }
`;
