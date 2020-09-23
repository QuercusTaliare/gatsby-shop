const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productCategoriesTemplate = path.resolve('./src/templates/ProductCategories.js');
  const productTemplate = path.resolve('./src/templates/Product.js');

  // Creates a promise of the graphql call
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

      allInventoryJson {
        edges {
          node {
            name
            desc
            img
            price
            supplier
            slug
          }
        }
      }

    }
  
  `)
  
  // Create a list of all the product categories returned from the promise
  const productCategories = res.data.allStoreNavigationJson.edges;

  productCategories.forEach((category) => {

    createPage({
      component: productCategoriesTemplate,
      path: `/store/${category.node.link}`,
      context: {
        slug: category.node.link,
        title: category.node.label,
      }
    })

  })

  // Create a list of all the products returned from the promise
  const products = res.data.allInventoryJson.edges;

  // Creates a page for each product
  products.forEach((product) => {

    console.log(product.node.slug);

    createPage({
      component: productTemplate,
      path: `/product/${product.node.slug}`,
      context: {
        slug: product.node.slug,
        title: product.node.name
      }
    })

  })

  // return Promise.all([])

}