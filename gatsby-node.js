// const path = require('path');
// const slash = require('slash');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // Templates for the pages and course pages
//   const pageTemplate = path.resolve('./src/templates/page.js');
//   const courseTemplate = path.resolve('./src/templates/course.js');

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         filter: { frontmatter: { type: { in: ["course", "page"] } } }
//       ) {
//         edges {
//           node {
//             id
//             frontmatter {
//               type
//               path
//             }
//           }
//         }
//       }
//     }
//   `);

//   // Check for any errors
//   if (result.errors) throw new Error(result.errors);

//   // Access query results via object destructuring
//   const { allMarkdownRemark } = result.data;

//   allMarkdownRemark.edges.forEach(edge => {
//     createPage({
//       path: edge.node.frontmatter.path,
//       component:
//         edge.node.frontmatter.type === 'course'
//           ? slash(courseTemplate)
//           : slash(pageTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     });
//   });
// };
