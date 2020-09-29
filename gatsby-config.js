/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

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
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ],
}
