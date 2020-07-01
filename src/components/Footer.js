import React from 'react';

// Styled Component
import { StyledFooter } from './styles/StyledFooter';

import TwitterIcon from '../images/weiben-twitter2.svg';
import YoutubeIcon from '../images/weiben-youtube2.svg';

const Footer = () => (
  <StyledFooter>
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <center>
              <a
                href="https://twitter.com/weibenfalk"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="social twitter"
                  src={TwitterIcon}
                  alt="weiben-twitter"
                />
              </a>
              <a
                href="https://www.youtube.com/user/Weibenfalk"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="social youtube"
                  src={YoutubeIcon}
                  alt="weiben-youtube"
                />
              </a>
            </center>
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
