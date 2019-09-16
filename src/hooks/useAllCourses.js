import { useStaticQuery, graphql } from 'gatsby';

export const useAllCourses = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query AllCoursesQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "course" } } }) {
        edges {
          node {
            frontmatter {
              type
              premium
              path
              date
              title
              subtitle
              excerpt
              cta1
              cta1Link
              cta2
              cta2Link
              cta3
              cta3Link
              image
            }
          }
        }
      }
    }
  `);

  return edges;
};
