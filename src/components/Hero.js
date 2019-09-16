/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';

// Custom Hook
import { useHeroContent } from '../hooks/useHeroContent';

// Styled Component
import { StyledHero } from './styles/StyledHero';

import OptImage from './OptImage';
import Button from './Button';

const Hero = () => {
  const { html, cta1, cta1Link, cta2, cta2Link, image } = useHeroContent();

  return (
    <StyledHero>
      <div className="container">
        <div className="row">
          <div className="text-wrapper col-md-6">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div className="buttons-wrapper">
              <a href={cta1Link}>
                <Button color="dark" text={cta1} />
              </a>
              {/* <Link to={cta2Link}>
                <Button text={cta2} />
              </Link> */}
            </div>
          </div>
          <div className="col-md-6 hero-image-wrapper">
            <OptImage alt="hero-image" filename={image} />
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
