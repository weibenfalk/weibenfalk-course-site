/* eslint-disable react/no-danger */
import React from 'react';

// Custom Hook
import { useHeroContent } from '../hooks/useHeroContent';

// Styled Component
import { StyledHero } from './styles/StyledHero';

import OptImage from './OptImage';
import Button from './Button';

const Hero = () => {
  const { html, cta1, cta2, image } = useHeroContent();

  return (
    <StyledHero>
      <div className="container">
        <div className="row">
          <div className="text-wrapper col-md-6">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div className="buttons-wrapper">
              <Button color="dark" text={cta1} />
              <Button text={cta2} />
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
