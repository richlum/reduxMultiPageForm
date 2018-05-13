import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate1 } from './validate'
import { asyncValidate1 } from './asyncValidate'
import renderField from './renderField'

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <button type="submit" className="next" className="btn btn-primary">
            Next
          </button>
        </div>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
    </form>
  )
}

export default reduxForm({
  form: 'reformed_01',                 // <------ same form name -> this is the store
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate : validate1,
  asyncValidate: asyncValidate1
})(WizardFormFirstPage)
