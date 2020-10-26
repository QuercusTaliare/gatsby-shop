import React, { useEffect, useState } from 'react'

export default function GetProducts(props) {
  
  const [products, setProducts] = useState([]);

  useEffect(function() {

    const fetchData = () => {
      
      fetch(`https://cors-anywhere.herokuapp.com/http://159.203.25.245/api/products/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          setProducts(data.products);
          
        })
        .catch(error => { console.log(error) })

    }

    fetchData();

  }, [])

  return [products]
  
}
