import React, { useEffect, useState } from 'react'

export default function ServerPage(props) {
  
  const [products, setProducts] = useState();

  useEffect(() => {

    fetch(`159.203.25.245/api/products/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {console.log(res)})

    

  }, [])

  return (
    <>
      <h2>Server Test</h2>

    </>
  )
}
