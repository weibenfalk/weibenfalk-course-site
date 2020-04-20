import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: #4a717f;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  .wrapper {
    background: red;
    padding: 40px 0;
    background-color: #7cb5c9;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234a717f' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }

  .wrapper-copyright {
    text-align: center;
    padding: 40px 0;
    color: #fff;
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
  }

  .social {
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      opacity: 0.8;
    }
  }

  .twitter {
    width: 60px;
    height: 60px;
    margin: 0 10px 20px 0;

    @media (min-width: 768px) {
      margin: 0 10px 0 0;
    }

    @media (min-width: 992px) {
      width: 60px;
      height: 60px;
      font-size: 18px;
    }
    @media (min-width: 1200px) {
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }
  }

  .youtube {
    width: 60px;
    height: 60px;
    margin: 0 10px 20px 0;

    @media (min-width: 768px) {
      margin: 0 10px 0 0;
    }

    @media (min-width: 992px) {
      width: 60px;
      height: 60px;
      font-size: 18px;
    }
    @media (min-width: 1200px) {
      width: 80px;
      height: 80px;
    }
  }
`;
