import React, { useState } from 'react';
import Layout from '../components/Layout';

import inventory from '../data/inventory.json';

// import UseSearch from '../utils/UseSearch';

export default function SearchPage() {

  // const { query, updateQuery } = UseSearch();
  
  const [ query, setQuery ] = useState("");

  function handleChange(e) {
    setQuery( e.target.value )
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.clear();
    // console.log(query);

    // inventory.forEach(product => {
    //   if (product.name.includes(query)) {
        
    //     console.log("Yay");
    //   }
    // })

    // e.target.value = "";
  }
  
  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit}>
          <label for="search">Search</label>
          <input 
            type="text" 
            name="search" 
            id="search" 
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Find Product</button>
        </form>

        <ul>

        </ul>
      </Layout>
    </>
  )
}