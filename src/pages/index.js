import React from "react";
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import { toggleDarkMode } from '../state/app';

const IndexPage = ({isDarkMode, dispatch}) => {
  return (
    <Layout>
      <h2>Home</h2>
      <p>Home is where the heart is</p>
      <button
        style={isDarkMode ? { background: 'black', color: 'white'} : null}
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >
        Dark Mode {isDarkMode ? 'on' : 'off'}
      </button>
    </Layout>
  )
}

export default connect(state => ({
  isDarkMode: state.app.isDarkMode
}), null)(IndexPage)
