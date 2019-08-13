import { useStaticQuery, graphql } from 'gatsby';

export const useAllQuotes = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query QuotesQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "quote" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              author
            }
          }
        }
      }
    }
  `);

  return edges;
};
