import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/weiben-logo.svg';
import MainNav from './MainNav';

import { StyledHeader, StyledHeaderContainer } from './styles/StyledHeader';

const SiteHeader = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderContainer className="container">
      <img src={Logo} alt={siteTitle} />
      {/* <MainNav /> */}
    </StyledHeaderContainer>
  </StyledHeader>
);

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
};

SiteHeader.defaultProps = {
  siteTitle: ``,
};

export default SiteHeader;
