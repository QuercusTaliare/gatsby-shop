import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function LoginPage() {
  
  return (
    <>
      <Layout>
        <h2>Login</h2>
        <form>
          <label for="username">Username</label>
          <input type="text" name="username" id="username"/>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Sign In</button>
        </form>
        <Link to="/signup">Don't have an account?</Link>

      </Layout>
    </>
  )

}