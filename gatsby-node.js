const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);
const { filterPosts } = require('./src/utils/blog');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = filterPosts(result.data.allMarkdownRemark.edges);

  posts.forEach((post, index) => {
    
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode,  })
      console.log(node.fileAbsolutePath);
      //&& node.fileAbsolutePath.contains("blog/")
      createNodeField({
        name: `slug`,
        node,
        value: `${node.fileAbsolutePath.includes("blog/") ? BLOGS_BASE_PATH : LANDING_BASE_PATH }${value}`,
      })
    
  }
}
