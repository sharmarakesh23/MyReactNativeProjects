//import { createStore } from "redux"; for react native project
const { createStore } = require("redux")

const initialState = {
  name: {
    title: "mrs",
    first: "dânia",
    last: "da mota"
  },
  plan: {
    name: "gold",
    price: "100",
    exp: "2017"
  }
}

const UPDAT_NAME = "UPDATE_NAME"
const UPDAT_PLAN = "UPDATE_NAME"

const updateName = newName => {
  return {
    type: UPDAT_NAME, // it say's chaneg this
    payload: newName //"Rakesh" // make it this , it is a json object too {}
  }
}

function reducer(mystate = initialState, action) {
  switch (action.type) {
    case UPDAT_NAME:
      return {
        //object.extend
        ...mystate,
        name: action.payload
        //mystate.name.first = action.payload
      }

    default:
      break
  }

  return mystate
}

const store = createStore(reducer)

console.log("before", store.getState())

store.dispatch(
  updateName({
    title: "Mr",
    first: "Rakesh",
    last: "Sharma"
  })
)

console.log("after", store.getState())
