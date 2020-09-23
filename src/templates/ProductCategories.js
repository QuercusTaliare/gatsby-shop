import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import StoreLayout from '../components/StoreLayout';

const ProductCategories = (props) => {

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
            slug
          }
        }
      }
    }
  
  `)

  return (
    <Layout>

      <StoreLayout>

        <h2>{props.pageContext.title}</h2>

        <ul>
          {data.allInventoryJson.edges.map((edge) => {

            // If the the array of categories includes the category of the current-page (i.e. slug), then render out that product
            if (edge.node.categories.includes(props.pageContext.slug)) {
              
              const { name, supplier, img, price, desc, slug } = edge.node;
              
              return (
                <li>
                  <img src={img} alt={name} />
                  <h3>
                    <Link to={`/product/${slug}`}>
                      {name}
                    </Link>  
                  </h3>
                  <p>{`$ ${price / 100}`}</p>
                  <p>{supplier}</p>
                  <p>{desc}</p>
                  <button type="button">Add To Cart</button>
                </li>
              )

            } else {
              return
            }
          })}
        </ul>

      </StoreLayout>
      
    </Layout>
  )
}

export default ProductCategories;