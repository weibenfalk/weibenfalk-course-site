import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/weiben-logo.svg';
import MainNav from './MainNav';

import { StyledHeader, StyledHeaderContainer } from './styles/StyledHeader';

const SiteHeader = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderContainer className="container">
      <Link to="/">
        <img src={Logo} alt={siteTitle} />
      </Link>
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
