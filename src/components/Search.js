import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

export default function Search({ searchData, searchDataArray }) {

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

  // ******************************************************
  // Manual Search - NOT using Formik
  const [manualSearch, setManualSearch] = useState('');

  const handleChange = (e) => {
    
    setManualSearch(e.target.value);
    searchData(manualSearch)

  }

  return (

    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >

      {({ values, isValid, isSubmitting }) => (

        <Form>

          {/* MANUAL SEARCH */}
          <div>
            <label htmlFor="manualSearch">Manual Search</label>
            <input 
              type="text" 
              id="manualSearch" 
              name="Manual Search" 
              value={manualSearch} 
              onChange={handleChange} 
            />
          </div>
          
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
                console.clear()
                console.log(props)
                const { field } = props;
                const { onChange, values, onBlur, name } = field;
                return (
                  <div>
                    <input 
                      type="text" 
                      id={name} 
                      // onChange={onChange}
                      // value={values}
                      // onBlur={onBlur}
                      {...field}
                    />
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
          <pre>{JSON.stringify(manualSearch, null, 2)}</pre>

        </Form>
        
      )}
      
    </Formik>
  )
}