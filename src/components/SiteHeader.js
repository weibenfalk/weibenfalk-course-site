import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/weiben-logo-new2.svg';
import MainNav from './MainNav';

import TwitterIcon from '../images/weiben-twitter2.svg';
import YoutubeIcon from '../images/weiben-youtube2.svg';

import { StyledHeader, StyledHeaderContainer } from './styles/StyledHeader';

const SiteHeader = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderContainer className='container'>
      <Link to='/'>
        <img src={Logo} alt={siteTitle} />
      </Link>
      <div className='social'>
        <a
          href='https://twitter.com/weibenfalk'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            className='social twitter'
            src={TwitterIcon}
            alt='weiben-twitter'
          />
        </a>
        <a
          href='https://www.youtube.com/user/Weibenfalk'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            className='social youtube'
            src={YoutubeIcon}
            alt='weiben-youtube'
          />
        </a>
      </div>
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
