import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

export default function Search({ searchDataArray }) {

  const initialValues = {
    search: '',
    searchArray: ['']
  }

  const onSubmit = (values) => {
    searchDataArray(values.searchArray);
  }

  const validationSchema = Yup.object({
    search: Yup.string(),
    searchArray: Yup.array().of(Yup.string().required('Required'))
  })

  return (

    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >

      {({ values, isValid, isSubmitting }) => (

        <Form>
          
          <div>
            <label htmlFor="search">Search</label>

            {/* <Field 
              type="text"
              name="search"
              id="search"
            /> */}

            {/* Refactored version with rendered props of a typical Field component */}
            <Field  
              name="search" 
            >
              {props => {
                
                const { field } = props;
                return (
                  <div>
                    <input type="text" id="address" {...field} />
                  </div>
                )
                
              }}

            </Field>
          </div>

          <div>
            <label htmlFor="searchArray">Search Array</label>
            <FieldArray type="text" name="searchArray" id="searchArray">
              {fieldArrayprops => {

                const { push, remove, form } = fieldArrayprops;

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

          <button type="submit" disabled={!(isValid || isSubmitting)}>Search</button>
          {/* SHOWS THE CURRENT VALUES - DEVELOPMENT ONLY */}
          <pre>{JSON.stringify(values, null, 2)}</pre>

        </Form>
        
      )}
      
    </Formik>
  )
}