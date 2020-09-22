const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productsTemplate = path.resolve('./src/templates/Products.js');

  const res = await graphql(`
  
    query {
      allStoreNavigationJson {
        edges {
          node {
            link
            label
          }
        }
      }
    }
  
  `)

  res.data.allStoreNavigationJson.edges.forEach((edge) => {
    createPage({
      component: productsTemplate,
      path: `/store/${edge.node.link}`,
      context: {
        slug: edge.node.link,
        title: edge.node.label
      }
    })
  })
}