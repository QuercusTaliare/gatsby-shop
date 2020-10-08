import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function SignupPage() {

  return (
    <>
      <Layout>
        <h2>Sign Up</h2>
        <form>

          {/* Pickup or Delivery? (dropdown), Address*, Address (Line 2), City*, State, Province*, Postal Code* */}
          <fieldset>

            <legend>Address and Delivery</legend>

            <label for="receivingOrder">
              <span>Delivery or Pickup?</span>
              <select id="receivingOrder">
                <option value="">Select</option>
                <option value="delivery">Delivery</option>
                <option value="pickup">Pick Up</option>
              </select>
            </label>

            <label for="address">
              <span>Address</span>
              <input type="text" name="address" id="address" />
            </label>

            <label for="addressTwo">
              <span>Address (Line 2)</span>
              <input type="text" name="addressTwo" id="addressTwo" />
            </label>

            <label for="city">
              <span>City</span>
              <input type="text" name="city" id="city" />
            </label>

            <label for="postalCode">
              <span>Postal Code</span>
              <input type="text" name="postalCode" id="postalCode" />
            </label>

          </fieldset>

          {/* First Name*, Last Name*, Email Address*, Company, Who Referred you?, Phone*, Note To Driver, Password*, [Checkboxes: Show Password, General News List] */}
          <fieldset>
            <legend>Personal Information</legend>

            <label for="firstName">
              <span>First Name</span>
              <input type="text" name="firstName" id="firstName" />
            </label>

            <label for="lastName">
              <span>Last Name</span>
              <input type="text" name="lastName" id="lastName" />
            </label>

            <label for="email">
              <span>Email</span>
              <input type="email" name="email" id="email" />
            </label>

            <label for="phone">
              <span>Phone (xxx-xxx-xxxx)</span>
              <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            </label>

            <label for="userName">
              <span>Username</span>
              <input type="text" name="userName" id="userName" />
            </label>

            <label for="password">
              <span>Password</span>
              <input type="password" name="password" id="password" />
            </label>

          </fieldset>

          {/* PAYMENT INFO: Card Number, Expiration Date, Security Code */}
          <fieldset>
            <legend>Credit Card</legend>
          </fieldset>

          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Sign In</button>
        </form>
        <Link to="/login">Don't have an account?</Link>

        

        

        

      </Layout>
    </>
  )

}