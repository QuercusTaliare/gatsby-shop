const path = require('path');

// TURN CATEGORIES INTO NAVIGATION function
const turnCategoriesIntoNavigation = async ({ graphql, actions }) => {

  // Choose which template is to be used
  const productCategoriesTemplate = path.resolve('./src/templates/ProductCategories.js');

  // Query the necessary data to create a storeNavigation from the list of categories
  const { data } = await graphql(`
  
    query {

      allStoreNavigationJson {
        nodes {
          name
          slug
          subCategories {
            name
            slug
            subCategories {
              name
              slug
            }
          }
        }
      }

      allStoreNavigationFlatJson {
        nodes {
          name
          slug
          rootUrl
        }
      }

      products: allInventoryJson {
        totalCount
        nodes {
          name
          desc
          categories
          price
          supplier
          slug
        }
      }

    }
  
  `)
  
  
  function dynamicSubCategories(slug, rootPath, name, subCategories) {
    
    rootPath = `${rootPath}/${slug}`;

    actions.createPage({
        component: productCategoriesTemplate,
        path: rootPath,
        context: {
          slug: slug,
          title: name
        }
    })

    if(subCategories) {
      
      subCategories.forEach(subCategory => {

        dynamicSubCategories(subCategory.slug, rootPath, subCategory.name, subCategory.subCategories)

      })

    }

  }

  // Create pages
  data.allStoreNavigationJson.nodes.forEach(category => {

    dynamicSubCategories(category.slug, '/store', category.name, category.subCategories); 
  
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


// CREATE ALL PAGES
module.exports.createPages = async (params) => {

  await Promise.all([
    turnCategoriesIntoNavigation(params),
    turnProductsIntoPages(params)
  ])

}