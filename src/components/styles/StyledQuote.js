import styled from 'styled-components';

export const StyledQuote = styled.div`
  background: ${props => (props.dark ? '#7cb5c9' : '#d1e6ed')};
  border-radius: 40px;
  min-height: 100px;
  padding: 25px 40px;
  margin: 40px 20px;
  transform: ${props =>
    props.dark
      ? `rotate(-${2 + Math.random() * 4}deg)`
      : `rotate(${2 + Math.random() * 4}deg)`};

  p {
    color: ${props => (props.dark ? '#fff' : '#4a717f')};
    margin-top: 10px;
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: center;
  }

  h5 {
    color: ${props => (props.dark ? '#fff' : '#4a717f')};
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
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
    border-top: 30px solid ${props => (props.dark ? '#7cb5c9' : '#d1e6ed')};
    clear: both;
  }
`;