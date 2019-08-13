import React from 'react';

import SiteLayout from '../components/SiteLayout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Quotes from '../components/Quotes';

const IndexPage = () => (
  <SiteLayout>
    <SEO title="Home" />
    <Hero />
    <Courses />
    <Quotes />
  </SiteLayout>
);

export default IndexPage;
