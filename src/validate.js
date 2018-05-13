// const validate = values => {
//   const errors = {}
//   if (!values.firstName) {
//     errors.firstName = 'Required'
//   }
//   if (!values.lastName) {
//     errors.lastName = 'Required'
//   }
//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }
//   if (!values.sex) {
//     errors.sex = 'Required'
//   }
//   if (!values.favoriteColor) {
//     errors.favoriteColor = 'Required'
//   }
//   return errors
// }

//these validations are hit on a per keystroke basis
// we might want to use this for checkboxes and radio buttons

// validate: (values,props) => errors 
const validate1 = values => {
  console.log('validate: ', JSON.stringify(values))
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  return errors
}
const validate2 = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  return errors
}
const validate3 = values => {
  const errors = {}
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required'
  }
  return errors
}


/* 
  1st pass, 
    required - fieldnames 
    linked text, radio buttons, checkboxes - same values
    trigger functions 
      enable/disable other field if checked/filled in or not
      attach/remove form if checked/filled in or not

  concerns
    fieldnames have to be globally unique across all forms
    we are not using pdffieldname, but name
      - is there a way to map from form/field to contenated form-fieldname?
    otherwise we have to encapsulate fields by their form
    

*/
export  {validate1,validate2,validate3}
