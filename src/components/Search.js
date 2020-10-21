import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

export default function Search({ searchData }) {

  const initialValues = {
    search: '',
    searchArray: ['']
  }

  const onSubmit = (values) => {
    // searchData(values.search);
    console.log(values)
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
      {({ values }) => (

        <Form>
          
          <div>
            <label htmlFor="search">Search</label>
            <Field 
              type="text" 
              name="search" 
              id="search"
            />
          </div>

          <div>
            <label htmlFor="searchArray">Search Array</label>
            <FieldArray type="text" name="searchArray" id="searchArray">
              {fieldArrayprops => {
                const { push, remove, form } = fieldArrayprops;
                console.log(form.values.searchArray);
                return (
                  <div>
                    {
                      form.values.searchArray.map((searchItem, index) => {
                        return (
                          <div key={index}>
                            <Field name={`searchArray[${index}]`} />
                            {
                              // If there is only one search item, the remove button is NOT rendered
                              index > 0 && <button type="button" onClick={() => remove(index)}> - </button>
                            }
                            <button type="button" onClick={() => push('')}> + </button>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }}
            </FieldArray>
          </div>

          <button type="submit">Search</button>
          {/* SHOWS THE CURRENT VALUES - DEVELOPMENT ONLY */}
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
        
      )}
      
    </Formik>
  )
}