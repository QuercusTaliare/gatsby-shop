import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Search from './Search';

const StoreLayout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      allStoreNavigationJson {
        edges {
          node {
            id
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
          {/* Loop through every category to create navigation */}
          {data.allStoreNavigationJson.edges.map(edge => {
            return (
              <li key={edge.node.id}>
                <Link to={`/store/${edge.node.slug}`}>{edge.node.name}</Link>
                {/* If the category has a subCategory, then loop through those and create subdomains */}
                {edge.node.subCategories.length
                  ? 
                  <ul>
                    {edge.node.subCategories.map(subCategory => {
                      return (
                        <li>
                          <Link to={`/store/${edge.node.slug}/${subCategory.slug}`}>{subCategory.name}</Link>
                          {/* If the subCategories have subCategories (two levels deep), then loop through these and create subdomains */}
                          {subCategory.subCategories.length
                            ?
                            <ul>
                              {subCategory.subCategories.map(twoSubCategory => {
                                return (
                                  <li>
                                    <Link to={`/store/${edge.node.slug}/${subCategory.slug}/${twoSubCategory.slug}`}>
                                      {twoSubCategory.name}
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                            : null
                          } 
                        </li>
                      )
                    })} 
                  </ul>
                  : null 
                }
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