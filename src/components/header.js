import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/weiben-logo.svg';
import MainNav from './MainNav';

import { StyledHeader, StyledHeaderContainer } from './styles/StyledHeader';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderContainer className="container">
      <img src={Logo} alt={siteTitle} />
      <MainNav />
    </StyledHeaderContainer>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
