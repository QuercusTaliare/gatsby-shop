import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

// The createStore method (from redux) takes the rootReducer as an argument, and allows you to create the centralized state store
// The second argument allows you to use the Redux Devtools in the browser
const createStore = () => reduxCreateStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// This Provider will "provide" state by setting it up so it can wrap itself around the Gatsby Root element. 
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);