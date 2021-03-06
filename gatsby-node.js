const path = require('path');

// TURN CATEGORIES INTO NAVIGATION function
const turnCategoriesIntoNavigation = async ({ graphql, actions }) => {

  const productCategoriesTemplate = path.resolve('./src/templates/ProductCategories.js');

  const { data } = await graphql(`
  
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

  data.allStoreNavigationJson.edges.forEach(category => {
    actions.createPage({
      component: productCategoriesTemplate,
      path: `/store/${category.node.link}`,
      context: {
        slug: category.node.link,
        title: category.node.label,
      }
    })
  })

} // Turn Categories Into Pages function ENDS

// TURN PRODUCTS INTO PAGES function
const turnProductsIntoPages = async ({ graphql, actions }) => {
  // 1. Get template for the page
  const productTemplate = path.resolve('./src/templates/Product.js');
  // 2. Query all products
  const { data } = await graphql(`

    query {
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
    
      
  `);
  // 3. 
  data.allInventoryJson.edges.forEach(product => {
    actions.createPage({
      component: productTemplate,
      path: `/product/${product.node.slug}`,
      context: {
        slug: product.node.slug,
        title: product.node.name,
        img: product.node.img
      }
    })
  })

} // Turn Products Into Pages function ENDS

// *************************************************************

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const productCategoriesTemplate = path.resolve('./src/templates/ProductCategories.js');
//   const productTemplate = path.resolve('./src/templates/Product.js');

//   // Creates a promise of the graphql call
//   const res = await graphql(`
  
//     query {

//       allStoreNavigationJson {
//         edges {
//           node {
//             link
//             label
//           }
//         }
//       }

//       allInventoryJson {
//       nodes {
//         name
//         desc
//         img
//         price
//         supplier
//         slug
//       }
//     }

//     }
  
//   `)
  
//   // Create a list of all the product categories returned from the promise
//   const productCategories = res.data.allStoreNavigationJson.edges;

//   productCategories.forEach((category) => {

//     createPage({
//       component: productCategoriesTemplate,
//       path: `/store/${category.node.link}`,
//       context: {
//         slug: category.node.link,
//         title: category.node.label,
//       }
//     })

//   })

//   // Create a list of all the products returned from the promise
//   const products = res.data.allInventoryJson.edges;

//   // Creates a page for each product
//   products.forEach((product) => {

//     createPage({
//       component: productTemplate,
//       path: `/product/${product.node.slug}`,
//       context: {
//         slug: product.node.slug,
//         title: product.node.name
//       }
//     })

//   })

//   // return Promise.all([])

// }

module.exports.createPages = async (params) => {

  await Promise.all([
    turnCategoriesIntoNavigation(params),
    turnProductsIntoPages(params)
  ])

}