import React from 'react';
import { Link } from 'gatsby';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Layout from '../components/Layout';

const initialValues = {
  username: '',
  password: ''
}

const onSubmit = values => {
  console.log('Form Data', values)
}

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i, 'Invalid Format')
})

export default function LoginPage() {

  const formik = useFormik({
    // This is initializing the form state
    initialValues: initialValues,
    // This is what happens when the form has been submitted
    onSubmit: onSubmit,
    validationSchema: validationSchema
    // validate: validate
  })

  return (
    <>
      <Layout>
        <h2>Login</h2>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}
          
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            {...formik.getFieldProps('password') }
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
          
          <button type="submit">Sign In</button>
        </form>

        <Link to="/signup">Don't have an account?</Link>

        <pre>{JSON.stringify(formik.values, null, 2)}</pre>

      </Layout>
    </>
  )

}