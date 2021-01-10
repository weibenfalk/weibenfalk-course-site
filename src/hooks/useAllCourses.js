import { useStaticQuery, graphql } from 'gatsby';

export const useAllCourses = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query AllCoursesQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "course" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              type
              published
              premium
              discount
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
