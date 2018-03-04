const redux = require("redux")

const initialState = {
  profile: {
    gender: "female",
    name: {
      title: "mrs",
      first: "dânia",
      last: "da mota"
    },
    phone: "015394 16261",
    cell: "0757-275-048",
    location: {
      street: "2591 rua pará ",
      city: "teixeira de freitas",
      state: "mato grosso",
      postcode: 31682
    },
    currentPlan: "free",
    upgraded: false
  },
  plans: [
    {
      id: "33453ttt",
      name: "gold",
      cost: 3500
    },
    {
      id: "334545tt",
      name: "silver",
      cost: 2500
    }
  ]
}

/* 
create an action to change the user's location
You can set the new location to:
   {
      street: "garage gully juhu ",
      city: "mumbai",
      state: "maharashtra",
      postcode: 34345
    },
*/

const updateLocation = newLocation => {
  return { type: UPDATE_LOCATION, payload: newLocation }
}

/* 
Write a reducer to handle the above action
Make sure to update the location object immutably
*/
const UPDATE_LOCATION = "UPDATE_LOCATION"

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      }
      break

    default:
      return state
      break
  }
}
/* 
  create a store with the initial data above and the action
*/
const store = redux.createStore(reducer)

console.log("Before =================== \n", JSON.stringify(store.getState()))

/* 
  Fire the action
*/
store.dispatch(
  updateLocation({
    street: "garage gully juhu ",
    city: "mumbai",
    state: "maharashtra",
    postcode: 34345
  })
)

/* 
expected output: modified nextState
the store via store.getState() 
*/

console.log("\nAfter =================== \n", JSON.stringify(store.getState()))
