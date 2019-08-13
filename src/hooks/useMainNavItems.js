import { useStaticQuery, graphql } from 'gatsby';

export const useMainNavItems = () => {
  const {
    markdownRemark: {
      frontmatter: { items },
    },
  } = useStaticQuery(graphql`
    query NavQuery {
      markdownRemark(frontmatter: { type: { eq: "menu" } }) {
        frontmatter {
          items {
            name
            link
          }
        }
      }
    }
  `);

  return items;
};
