import React from 'react';
import { Link } from 'gatsby';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Layout from '../components/Layout';

export default function SignupPage() {

  const initialValues = {
    receivingOrder: 'Delivery',
    address: '576 Blather Ave',
    addressTwo: '',
    city: 'Knuckleberg',
    postalCode: 'L0R 2H6',
    firstName: 'Bill',
    lastName: 'Baxby',
    email: 'bill@baxby.net',
    phone: '987-456-2345',
    userName: 'bill_78',
    password: '9uiO5Gf!',
    creditCardNumber: '',
    expDate: '',
    securityCode: ''
  }

  const onSubmit = values => {
    console.clear();
    console.log('Form Data', values)
  }

  const validationSchema = Yup.object({
    receivingOrder: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    addressTwo: Yup.string(),
    city: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required').matches(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i, "Invalid Format"),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid Email Format'),
    phone: Yup.string().required('Required').matches(/^[2-9]\d{2}-\d{3}-\d{4}$/, 'Invalid phone format'),
    userName: Yup.string().required('Required'),
    password: Yup.string().required('Required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i, 'Invalid Format'),
    creditCardNumber: Yup.string(),
    expDate: Yup.string(),
    securityCode: Yup.string()
  })



  return (
    <>

      <Layout>
        <h2>Sign Up</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >

          <Form>

            {/* Pickup or Delivery? (dropdown), Address*, Address (Line 2), City*, State, Province*, Postal Code* */}
            <fieldset>

              <legend>Address and Delivery</legend>

              <label for="receivingOrder">
                <span>Delivery or Pickup?</span>
                <Field as="select" name="receivingOrder" id="receivingOrder">
                  <option value="">Select</option>
                  <option value="delivery">Delivery</option>
                  <option value="pickup">Pick Up</option>
                </Field>
                <ErrorMessage name="receivingOrder" />
              </label>

              <label for="address">
                <span>Address</span>
                <Field type="text" name="address" id="address" />
                <ErrorMessage name="address" />
              </label>

              <label for="addressTwo">
                <span>Address (Line 2)</span>
                <Field type="text" name="addressTwo" id="addressTwo" />

              </label>

              <label for="city">
                <span>City</span>
                <Field type="text" name="city" id="city" />
                <ErrorMessage name="city" />
              </label>

              <label for="postalCode">
                <span>Postal Code</span>
                <Field type="text" name="postalCode" id="postalCode" />
                <ErrorMessage name="postalCode" />
              </label>

            </fieldset>

            {/* First Name*, Last Name*, Email Address*, Company, Who Referred you?, Phone*, Note To Driver, Password*, [Checkboxes: Show Password, General News List] */}
            <fieldset>
              <legend>Personal Information</legend>

              <label for="firstName">
                <span>First Name</span>
                <Field type="text" name="firstName" id="firstName" />
                <ErrorMessage name="firstName" />
              </label>

              <label for="lastName">
                <span>Last Name</span>
                <Field type="text" name="lastName" id="lastName" />
                <ErrorMessage name="lastName" />
              </label>

              <label for="email">
                <span>Email</span>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" />
              </label>

              <label for="phone">
                <span>Phone (xxx-xxx-xxxx)</span>
                <Field type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                <ErrorMessage name="phone" />
              </label>

              <label for="userName">
                <span>Username</span>
                <Field type="text" name="userName" id="userName" />
                <ErrorMessage name="userName" />
              </label>

              <label for="password">
                <span>Password</span>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" />
              </label>

            </fieldset>

            {/* PAYMENT INFO: Card Number, Expiration Date, Security Code */}
            <fieldset>
              <legend>Credit Card</legend>

              <label for="creditCardNumber">
                <span>Credit Card Number</span>
                <Field type="text" name="creditCardNumber" id="creditCardNumber" />
                <ErrorMessage name="creditCardNumber" />
              </label>

              <label for="expDate">
                <span>Expiration Date</span>
                <Field type="date" name="expDate" id="expDate" />
                <ErrorMessage name="expDate" />
              </label>

              <label for="securityCode">
                <span>Security Code</span>
                <Field type="text" name="securityCode" id="securityCode" />
                <ErrorMessage name="securityCode" />
              </label>

            </fieldset>

            <button type="submit">Submit</button>

          </Form>

        </Formik>

        <Link to="/login">Already have an account?</Link>

      </Layout>

    </>
  )

}