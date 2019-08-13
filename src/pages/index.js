import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Quotes from '../components/Quotes';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Courses />
    <Quotes />
  </Layout>
);

export default IndexPage;
