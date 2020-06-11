import styled from 'styled-components';

export const StyledCourseCard = styled.div`
  background: #fff;
  min-height: 200px;
  margin: 20px 0 40px 0;
  padding: 40px;
  border-radius: 40px;
  box-shadow: 5px 6px rgba(124, 181, 201, 0.5);
  text-align: center;
  position: relative;

  ::before {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    content: '90% off!';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    background: rgb(227, 80, 80);
    background: linear-gradient(
      0deg,
      rgba(227, 80, 80, 1) 0%,
      rgba(255, 159, 158, 1) 57%
    );
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 800;
    z-index: 1000;
    transform: rotate(20deg);
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.27);
    color: white;
  }

  h6 {
    background: #d7e7ec;
    max-width: 220px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    color: #fff;
  }

  .course-image {
    img {
      width: 100% !important;
      border-radius: 20px;
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
