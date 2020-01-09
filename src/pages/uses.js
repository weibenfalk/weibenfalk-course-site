import React from 'react';
import { graphql } from 'gatsby';

import SiteLayout from '../components/SiteLayout';
import SEO from '../components/seo';

const UsesPage = ({ data: { markdownRemark } }) => (
  <SiteLayout>
    <SEO title="Weibenfalk's uses" />
    <div className="container">
      <div className="row">
        <div
          className="col-md"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </div>
    </div>
  </SiteLayout>
);

export default UsesPage;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Uses Page" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
