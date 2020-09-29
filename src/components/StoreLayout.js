import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const StoreLayout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      allStoreNavigationJson {
        edges {
          node {
            id
            label
            link
          }
        }
      }
    }
  
  `)


  return (
    <>
      <nav>
        <ul>
          <li>
            <h2>
              <Link to="/store">Store</Link>
            </h2>
          </li>
          {data.allStoreNavigationJson.edges.map(edge => {
            return (
              <li key={edge.node.id}>
                <Link to={`/store/${edge.node.link}`}>{edge.node.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {children}
    </>
  )
}

export default StoreLayout;