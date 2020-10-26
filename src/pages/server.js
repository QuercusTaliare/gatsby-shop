import React, { useEffect, useState } from 'react'

export default function ServerPage(props) {
  
  const url = 'https://cors-anywhere.herokuapp.com/http://159.203.25.245/api/products';
  const token = 'XLMDEH6DKAT3NGO7CSS64SXB';
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchedData = (rootUrl, endpoint = '') => {
      
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

    fetchedData(url);

    console.clear();
    console.log(products);

    

  }, [])


  // 
  function getProductTokens() {
    const productTokens = products.map(product => product.token);
    return productTokens;
  }

  // All the product tokens
  const productTokens = getProductTokens();

  function getDetailedProductInfo(productTokens) {
    const requests = productTokens.map(token => {
      
    })
  }
  

  return (
    <>

      <h2>Server Test</h2>

    </>
  )
}
