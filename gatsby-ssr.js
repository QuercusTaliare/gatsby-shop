import React from 'react';
import { OrderProvider } from './src/components/OrderContext';
import { RecipeProvider } from './src/components/RecipeContext';


export function wrapRootElement({ element }) {
  return (
    <RecipeProvider>
      <OrderProvider>
        {element}
      </OrderProvider>
    </RecipeProvider>
  )
}

// export { default as wrapRootElement } from './src/state/ReduxWrapper';