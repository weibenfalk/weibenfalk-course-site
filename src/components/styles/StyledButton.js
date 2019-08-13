import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: ${props => (props.size === 'small' ? '18px' : '12px')};
  background: ${props => (props.color === 'dark' ? '#4a717f' : '#fff')};
  color: ${props => (props.color === 'dark' ? '#fff' : '#7cb5c9')};
  width: ${props => (props.size === 'small' ? '180px' : '130px')};
  height: ${props => (props.size === 'small' ? '50px' : '60px')};
  border: ${props => (props.color === 'dark' ? '0' : '2px solid #7cb5c9')};
  border-radius: 40px;
  margin: 0 10px 20px 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  :last-child {
    margin: 0;
  }

  :hover {
    opacity: 0.8;
  }

  @media (min-width: 576px) {
    font-size: ${props => (props.size === 'small' ? '18px' : '14px')};
    width: ${props => (props.size === 'small' ? '180px' : '150px')};
  }
  @media (min-width: 768px) {
    width: ${props => (props.size === 'small' ? '180px' : '130px')};
    font-size: ${props => (props.size === 'small' ? '18px' : '16px')};
  }
  @media (min-width: 992px) {
    width: ${props => (props.size === 'small' ? '180px' : '180px')};
    font-size: ${props => (props.size === 'small' ? '18px' : '18px')};
  }
  @media (min-width: 1200px) {
    width: ${props => (props.size === 'small' ? '180px' : '210px')};
    font-size: ${props => (props.size === 'small' ? '18px' : '22px')};
  }
`;
