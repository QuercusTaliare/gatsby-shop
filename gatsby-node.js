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
  
  

  // Create pages
  data.allStoreNavigationJson.nodes.forEach(category => {
    
    actions.createPage({
      component: productCategoriesTemplate,
      path: `/store/${category.slug}`,
      context: {
        slug: category.slug,
        title: category.name,
      }
    })

    // One Level Deep - Sub Categories
    // If the subCategory array has items in it, create subdomains for those
    if (category.subCategories.length) {
      category.subCategories.forEach(subCategory => {

        actions.createPage({
          component: productCategoriesTemplate,
          path: `/store/${category.slug}/${subCategory.slug}`,
          context: {
            slug: subCategory.slug,
            title: subCategory.name
          }
        })
        
        // Two Levels Deep - Sub Categories
        // If the subCategories array within the subCategory has items, then those subdomains will created, too.
        if (subCategory.subCategories.length) {

          subCategory.subCategories.forEach(twoSubCategory => {

            actions.createPage({
              component: productCategoriesTemplate,
              path: `/store/${category.slug}/${subCategory.slug}/${twoSubCategory.slug}`,
              context: {
                slug: twoSubCategory.slug,
                title: twoSubCategory.name
              }
            })

          })

        } // Two Levels Deep - Sub Categories if ends

      })

    } // One Level Deep - Sub Categories if ends

  }) // Create pages for Product Categories ends

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