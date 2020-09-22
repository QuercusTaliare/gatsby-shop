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

      <h2>{props.pageContext.title}</h2>

      <ul>
        {data.allInventoryJson.edges.map((edge) => {


          // edge.node.categories.map((category) => {

          //   console.log(category, props.pageContext.slug)

          //   if (category === props.pageContext.slug) {
          //     return (
          //       <li>
          //         <h2>Blah</h2>
          //       </li>
          //     )
              
          //   } else {
          //     return
          //   }
    
          // })

          


        })}
      </ul>
      
    </Layout>
  )
}

export default Products;