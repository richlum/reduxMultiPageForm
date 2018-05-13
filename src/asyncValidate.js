

const sleep = ms => new Promise(resolve => setTimeout(resolve,ms))
const asyncValidate1 = (values  /*, dispatch */) => {
  console.log('asyncValidate1 ', JSON.stringify(values))
  return sleep(1000).then (() => {
    let errors = {}
    if (values.lastName){
      if (values.lastName.toLowerCase().startsWith('z')){
        throw { lastName: 'No Z lasatnames allowed'}
      }
      if (values.lastName.length() < 3){
        throw { lastName: 'lastname too short'}
      }
    } else {
      throw { lastName: 'Required lastname is missing'}
    }
    return {} 
  })
}

export {asyncValidate1}