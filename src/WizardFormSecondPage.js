import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate2 from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" className="previous" className="btn btn-primary" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next" className="btn btn-primary">
          Next
        </button>
      </div>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
            />{' '}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'reformed_02',                // store.key 
  // asyncBlurFields: [ 'fldname1' ]  - fields to trigger asycnValidate
  // asyncValidate: (values, dispatch,  props) => promise
  // initialValues: { fn: fv, }
  // onsubmit : func
  // return ReuectedSubmitPromise
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate2   // sychronouse validation functions
})(WizardFormSecondPage)
