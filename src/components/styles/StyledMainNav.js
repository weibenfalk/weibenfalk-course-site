import styled from 'styled-components';

export const StyledUL = styled.ul`
  list-style-type: none;
  margin: 0;

  li {
    display: inline;
    margin: 0 20px 0 0;
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.3s;

    :last-child {
      margin: 0;

      :after {
        margin-left: 5px;
        content: url(${props => props.loginImg});
      }
    }

    :hover {
      opacity: 0.5;
    }
  }
`;
