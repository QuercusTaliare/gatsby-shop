import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StoreLayout from '../components/StoreLayout';

const ProductCategories = (props) => {

  return (
    <Layout>

      <StoreLayout>

        <h2>{props.pageContext.title}</h2>

        <ul>

          {props.data.allInventoryJson.nodes.map((product) => {
            
            const { id, name, supplier, price, desc, slug } = product;

            return (
              <li key={id}>
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
          })}

        </ul>

      </StoreLayout>
      
    </Layout>
  )
}

export default ProductCategories;

export const data = graphql`

  query($slug: [String!]) {
    allInventoryJson(filter: {categories: {in: $slug}}) {
      totalCount
      nodes {
        id
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

`;