import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import StoreLayout from '../components/StoreLayout';


const Product = ({ data }) => {

  const { name, desc, img, price, supplier, slug } = data.inventoryJson;

  return (
    <Layout>
      
      <StoreLayout>

        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{price}</p>
        <p>{supplier}</p>
        <Img 
          fixed={data.file.childImageSharp.fixed}
          alt={name}
        />


      </StoreLayout>

    </Layout>
  )
}

export default Product;

export const data = graphql`

  query($slug: String!, $img: String!) {
      inventoryJson(slug: { eq: $slug }) {
        name
        desc
        price
        img
        supplier
        slug
      }
      file(relativePath: { eq: $img }) {
        id
        childImageSharp {
          fixed(
            width: 200
          ) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }

`;