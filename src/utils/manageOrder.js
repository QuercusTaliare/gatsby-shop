import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function ManageOrder() {

  // Access state and updater function via context
  const [order, setOrder] = useContext(OrderContext);

  // Make a function to add things to order
  function addToOrder(orderedProduct) {
    setOrder([...order, orderedProduct]);
  }

  // Make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1)
    ]);
  }

  return {
    order,
    addToOrder,
    removeFromOrder
  }
};