import React from 'react';

// Styled Component
import { StyledFooter } from './styles/StyledFooter';

import TwitterIcon from '../images/weiben-twitter.svg';
import YoutubeIcon from '../images/weiben-youtube.svg';

const Footer = () => (
  <StyledFooter>
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              className="social twitter"
              src={TwitterIcon}
              alt="weiben-twitter"
            />
            <img
              className="social youtube"
              src={YoutubeIcon}
              alt="weiben-youtube"
            />
          </div>
          <div className="col-md-9 email-form">
            <form>
              <input
                className="email"
                type="text"
                name="email"
                placeholder="Want to get the latest news?"
              />
              <button type="submit">Register Email</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md">
            Copyright {new Date().getFullYear()} Weibenfalk
          </div>
        </div>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
