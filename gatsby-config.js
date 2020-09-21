/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  
  siteMetadata: {
    title: 'Dundurn Market',
    author: 'Dundurn Market'
  },
  plugins: [
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    }
  ],
}
