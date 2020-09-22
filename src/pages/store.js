import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const Store = () => {

  const data = useStaticQuery(graphql`
    query {
      allStoreNavigationJson {
        edges {
          node {
            label
            link
          }
        }
      }
    }
  
  `)


  return (
    <Layout>

      <h2>Store</h2>
      <nav>
        <ul>
          {data.allStoreNavigationJson.edges.map(edge => {
            return (
              <li>
                <Link to={`/store/${edge.node.link}`}>{edge.node.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </Layout>
  )
}

export default Store;