import React from 'react';

import Layout from '../components/Layout';
import StoreLayout from '../components/StoreLayout';
import Pagination from '../components/Pagination';

const Store = () => {

  return (
    <Layout>

      <StoreLayout />
      <Pagination 
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        
      
      />
      

    </Layout>
  )
}

export default Store;