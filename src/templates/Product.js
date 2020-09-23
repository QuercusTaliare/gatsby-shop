import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import StoreLayout from '../components/StoreLayout';


const Product = () => {

  const data = useStaticQuery(graphql`
  
    query {
      inventoryJson {
        name
      }
    }

  `)

  // const { name, desc, img, price, supplier } = data.allInventoryJson.edges.node;

  console.log(data.inventoryJson);

  const { name } = data.inventoryJson;

  return (
    <Layout>
      
      <StoreLayout>

        <h2>{name}</h2>

      </StoreLayout>

    </Layout>
  )
}

export default Product;