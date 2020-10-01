import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StoreLayout from '../components/StoreLayout';
import manageOrder from '../utils/manageOrder';
// import Pagination from '../components/Pagination';

const ProductCategories = (props) => {

  const { order, addToOrder, removeFromOrder } = manageOrder();

  return (
    <Layout>

      <StoreLayout>

        {/* <Pagination 
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={props.data.allInventoryJson.totalCount}
          currentPage={pageContext.currentPage || 1}
        /> */}

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
                <button 
                  type="button" 
                  onClick={() => addToOrder({ id: id, name: name })}
                >
                  Add To Cart
                </button>
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