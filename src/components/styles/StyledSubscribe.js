import styled from 'styled-components';

export const StyledSubscribe = styled.div`
  padding: 40px 0;
  background-color: #7cb5c9;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234a717f' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");

  .email-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: red;
    width: 100%;
  }
  .email {
    height: 40px;
    margin: 0 0 20px 0;
    padding: 0;
    border: 0;
    border-radius: 40px;
    width: 70%;
    outline: none;
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 16px;
    padding: 0 25px;
    color: #7cb5c9;
    transition: all 0.3s;

    @media (min-width: 576px) {
      width: 70%;
      margin: 0;
    }
    @media (min-width: 768px) {
      text-align: left;
      height: 60px;
    }
    @media (min-width: 992px) {
      font-size: 28px;
    }
    @media (min-width: 1200px) {
      height: 80px;
    }

    :hover {
      opacity: 0.8;
    }

    ::placeholder {
      color: #7cb5c9;
    }
  }

  button {
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    margin: 0 auto;
    height: 40px;
    width: 30%;
    border: 0;
    border-radius: 40px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    background: #4a717f;
    transition: all 0.3s;
    display: block;

    @media (min-width: 576px) {
      float: right;
      margin: 0;
      width: 25%;
    }
    @media (min-width: 768px) {
      width: 25%;
      height: 60px;
    }
    @media (min-width: 992px) {
      height: 60px;
      font-size: 18px;
    }
    @media (min-width: 1200px) {
      height: 80px;
    }

    :hover {
      opacity: 0.8;
    }
  }
`;
