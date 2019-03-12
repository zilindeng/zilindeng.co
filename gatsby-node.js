const path = require("path")
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/markdown/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              path
              title
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 1080) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate, // Template
        context: {}, // additional data can be passed via context
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const { frontmatter } = node;
  if (frontmatter) {
    const { thumbnail } = frontmatter;
    if (thumbnail) {
      if (thumbnail.indexOf('/assets') === 0) {
        frontmatter.thumbnail = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/', thumbnail)
        );
      }
    }
  }
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value
    });
    createNodeField({
      node,
      name: `collection`,
      value
    });
  }
  fmImagesToRelative(node);
};
