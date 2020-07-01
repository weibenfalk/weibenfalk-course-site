import styled from 'styled-components';

export const StyledQuote = styled.div`
  box-sizing: border-box;
  background: ${props => (props.dark ? '#1E8B9A' : '#C6F1F6')};
  border-radius: 40px;
  min-height: 100px;
  padding: 15px 20px;
  margin: 40px 0;
  transform: ${props =>
    props.dark
      ? `rotate(-${2 + Math.random() * 4}deg)`
      : `rotate(${2 + Math.random() * 4}deg)`};
  width: 100%;

  @media (min-width: 575px) {
    padding: 25px 40px;
  }

  p {
    color: ${props => (props.dark ? '#fff' : '#4a717f')};
    margin-top: 10px;
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size: o.8rem;
    line-height: 1.1rem;
    text-align: center;

    @media (min-width: 575px) {
      font-size: 1.1rem;
      line-height: 1.5rem;
    }
  }

  h5 {
    color: ${props => (props.dark ? '#fff' : '#4a717f')};
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    margin: 0;

    @media (min-width: 575px) {
      font-size: 1.2rem;
    }
  }

  :after {
    content: '';
    position: absolute;
    left: 80px;
    bottom: -30px;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid ${props => (props.dark ? '#1E8B9A' : '#C6F1F6')};
    clear: both;
  }
`;
