import React, { useEffect, useRef, useState } from 'react';
import createSearchIndex from '../utils/createSearchIndex';

export default function ServerPage(props) {
  
  const url = `https://cors-anywhere.herokuapp.com/${process.env.GATSBY_SERVER_PATH}/products`;
  const [products, setProducts] = useState([]);
  const [detailedProducts, setDetailedProducts] = useState([]);

  // Lifecycle for fetching basic product info
  useEffect(() => {

    const fetchData = (rootUrl, endpoint = '') => {
      
      fetch(`${rootUrl}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          setProducts(data.products)
        })
        .catch(error => {
          console.log(error);
        })

    }

    fetchData(url);

    console.log("basic products effect")

  }, [])


  // Lifecycle for fetching detailed product info
  useEffect(() => {

    if (products.length) {

      // Function to get all the product tokens
      function getProductTokens() {
        const productTokens = products.map(product => product.token);
        return productTokens;
      }

      // All the product tokens
      const productTokens = getProductTokens();

      // Function to fetch individual detailed product info
      async function fetchProductInfo(url, token) {
      
        let productInfo;

        await fetch(`${url}/${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            productInfo = data.products;
          })
          .catch(error => {
            console.log(`There is an error: ${error}`);
          })
          
        return productInfo;
        
      }

      // Function to fetch all detailed product info
      async function getDetailedProductInfo(productTokens) {
        const requests = productTokens.map(token => {
          return fetchProductInfo(url, token)
            .then((productInfo) => {
              return productInfo
            })
        })

        return Promise.all(requests);

      }

      // Call function to populate the detailedProducts array
      getDetailedProductInfo(productTokens)
        .then(results => {
          
          setDetailedProducts(results);

        })
        .catch(error => console.log(error))
      
      console.log("detailed products effect")
    
    }

    

  }, [products])

  useEffect(() => {

    if (detailedProducts.length) {

      const categorySearch = createSearchIndex('token', ['categories'], detailedProducts);
      
      const result = categorySearch.search('coffee');
      
      console.log(result);

    } 

  }, [detailedProducts])





  return (
    <>

      <h2>Server Test</h2>
      <ul>

        {(products && !detailedProducts.length) 
        ? 
          products.map(product => {
            return (
              <li key={product.token}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </li>
            )
          })
        :
          detailedProducts.map(detailedProduct => {
            return (
              <li key={detailedProduct.token}>
                <h3>{detailedProduct.name}</h3>
                <p>{detailedProduct.price}</p>
                <p>{detailedProduct.desc}</p>
              </li>
            )
          })
        } 

      </ul>

    </>
  )
}
