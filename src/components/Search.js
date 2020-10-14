import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Search({ searchData }) {

  const initialValues = {
    search: ''
  }

  const onSubmit = (values) => {
    searchData(values.search);
  }

  const validationSchema = Yup.object({
    search: Yup.string().required('Required')
  })


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="search">Search</label>
        <Field 
          type="text" 
          name="search" 
          id="search"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  )
}