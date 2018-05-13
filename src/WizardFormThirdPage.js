import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate3 from './validate'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" className="previous" className="btn btn-primary" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector} />
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'reformed_03',                //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate3
})(WizardFormThirdPage)
