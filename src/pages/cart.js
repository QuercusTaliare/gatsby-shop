import React from 'react';

import Layout from '../components/Layout';
import manageOrder from '../utils/manageOrder';
import inventory from '../data/inventory.json';

export default function CartPage() {

  const { order, addToOrder, removeFromOrder } = manageOrder();

  return (
    <Layout>
      <h2>Cart</h2>
      <ul>
        {order.map((singleOrder, index) => {

          const product = inventory.find(items => items.name === singleOrder.name);

          return (
            <div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          )

        })}
      </ul>
    </Layout>
  )

}