import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const StoreLayout = ({ children }) => {

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
              <li>
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