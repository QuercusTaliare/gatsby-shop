import React from 'react';
import { Link } from 'gatsby';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Layout from '../components/Layout';

const initialValues = {
  username: '',
  password: '',
  comments: '',
  address: ''
}

const onSubmit = values => {
  console.log('Form Data', values)
}

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i, 'Invalid Format').required('Required')
})

export default function LoginPage() {

  return (
    <>
      <Layout>
        <h2>Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >

          {/* Automatically has the onSubmit method within the component */}
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field 
                type="text" 
                name="username" 
                id="username" 
                />
              <ErrorMessage name='username' component='div' />
            </div>
            
            <div>
              <label htmlFor="password">Password</label>
              <Field 
                type="password" 
                name="password" 
                id="password" 
                />
              <ErrorMessage name="password">
                {
                  (errorMsg) => {
                    return (
                      <div style={{color: 'red'}}>{errorMsg}</div>
                    )
                  }
                }
              </ErrorMessage>
            </div>

            <div>
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea" 
                name="comments"
                id="comments"
              />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <Field name="address" id="address">
                {
                  (props) => {
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input type="text" id='address' {...field} />
                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                      </div>
                    )
                  }
                }
              </Field>
            </div>
            
            <button type="submit">Sign In</button>
          </Form>

        </Formik>

        <Link to="/signup">Don't have an account?</Link>

        {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}


      </Layout>
    </>
  )

}