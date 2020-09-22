import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const Products = (props) => {

  const data = useStaticQuery(graphql`

    query {
      allInventoryJson {
        edges {
          node {
            name 
            supplier
            img 
            price
            desc
            categories
          }
        }
      }
    }
  
  `)

  // console.log(props.pageContext);

  return (
    <Layout>

      <ul>
        {data.allInventoryJson.edges.map((edge) => {
          edge.node.categories.forEach((category) => {
            if (category === props.pageContext.slug) {
              // return (
              //   <li>
              //     <h2>Blah</h2>
              //   </li>
              // )

              console.log(edge.node.name)
            } 

            // console.log(category, props.pageContext.slug)
              
          })
        })}
      </ul>
      
    </Layout>
  )
}

export default Products;