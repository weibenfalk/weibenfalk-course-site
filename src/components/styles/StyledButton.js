import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Maven Bold', Arial, Helvetica, sans-serif;
  font-size: ${(props) => (props.size === 'small' ? '18px' : '12px')};
  background: ${(props) => (props.color === 'dark' ? '#3D3D3D' : '#fff')};
  color: ${(props) => (props.color === 'dark' ? '#FFFEF0' : '#3D3D3D')};
  width: ${(props) => (props.size === 'small' ? '180px' : '130px')};
  height: ${(props) => (props.size === 'small' ? '50px' : '60px')};
  border: ${(props) => (props.color === 'dark' ? '0' : '2px solid #3D3D3D')};
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
    font-size: ${(props) => (props.size === 'small' ? '18px' : '14px')};
    width: ${(props) => (props.size === 'small' ? '180px' : '150px')};
  }
  @media (min-width: 768px) {
    width: ${(props) => (props.size === 'small' ? '180px' : '130px')};
    font-size: ${(props) => (props.size === 'small' ? '18px' : '16px')};
  }
  @media (min-width: 992px) {
    width: ${(props) => (props.size === 'small' ? '180px' : '180px')};
    font-size: ${(props) => (props.size === 'small' ? '18px' : '18px')};
  }
  @media (min-width: 1200px) {
    width: ${(props) => (props.size === 'small' ? '180px' : '210px')};
    font-size: ${(props) => (props.size === 'small' ? '18px' : '22px')};
  }
`;
