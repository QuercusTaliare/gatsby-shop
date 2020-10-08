import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function SignupPage() {

  return (
    <>
      <Layout>
        <h2>Sign Up</h2>
        <form>
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Sign In</button>
        </form>
        <Link to="/login">Don't have an account?</Link>

        {/* Pickup or Delivery? (dropdown), Address*, Address (Line 2), City*, State, Province*, Postal Code* */}

        {/* First Name*, Last Name*, Email Address*, Company, Who Referred you?, Phone*, Note To Driver, Password*, [Checkboxes: Show Password, General News List] */}

        {/* PAYMENT INFO: Card Number, Expiration Date, Security Code */}

      </Layout>
    </>
  )

}