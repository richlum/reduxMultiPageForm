import {createStore, combineReducers, applyMiddleware} from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

const metaReducer = (state, action ) => {
  console.log('metaReducer')
  console.log('state', JSON.stringify(state))
  console.log('action', JSON.stringify(action))
  
  let result = reduxFormReducer(state,action)

  return result;

}

const reducer = combineReducers({
  //form: metaReducer
  form: reduxFormReducer
})


const consoleMsg = store => next => action => {
  let result = ''

  console.groupCollapsed('consoleMsg')
  //console.log(Object.keys(arguments).join(','))
  for (let x in arguments){
    if (typeof(arguments[x] === 'object')) {
      console.log('object',x,JSON.stringify(arguments[x]))
    }else{
      console.log(typeof(arguments[x]), x, arguments[x])
    }
  }
  console.log(`action: ${action.type}`)
  console.log('before state: ', JSON.stringify(store.getState()))

  result = next(action)

  console.log('after state: ', JSON.stringify(store.getState()))
  console.groupEnd()

  return result
}

export default (initialState={}) => {
  console.log('appReducer: ', reducer)
  return applyMiddleware(consoleMsg)(createStore)(reducer, initialState)
}
