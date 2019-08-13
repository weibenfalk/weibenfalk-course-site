import { useStaticQuery, graphql } from 'gatsby';

export const useHeroContent = () => {
  const {
    markdownRemark: {
      html,
      frontmatter: { cta1, cta2, image, cta1Link, cta2Link },
    },
  } = useStaticQuery(graphql`
    query HeroQuery {
      markdownRemark(frontmatter: { type: { eq: "hero" } }) {
        html
        frontmatter {
          cta1
          cta2
          cta1Link
          cta2Link
          image
        }
      }
    }
  `);

  return { html, cta1, cta2, cta1Link, cta2Link, image };
};
