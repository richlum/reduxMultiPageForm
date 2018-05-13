import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import { createStore, combineReducers } from 'redux'
// import { reducer as reduxFormReducer } from 'redux-form'
import storeFactory from'./store'

const dest = document.getElementById('content')
// const reducer = combineReducers({
//   form: reduxFormReducer // mounted under "form"
// })
// const store = createStore(reducer)
// window.store = store
const store = storeFactory()
window.store = store

const showResults = values =>   /* standin for axios network call */
  new Promise(resolve => {
    setTimeout(() => {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

let render = () => {
  const WizardForm = require('./WizardForm').default
  ReactDOM.hydrate(
    <Provider store={store}>
      <div >
        <h2>Re-Form-ed</h2>
        <WizardForm onSubmit={showResults} />
     </div>
    </Provider>,
    dest
  )
}



render()
