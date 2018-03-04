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
create an action to add a new plan called "valentine special".
You can set the id: "33453ttt" and the cost: 1500
*/
const ADD_NEWPLAN = "ADD_NEWPLAN"

const addNewPlan = newPlan => {
  return { type: ADD_NEWPLAN, payload: newPlan }
}

/* 
Write a reducer to handle the above action
Make sure to update the plans array immutably
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWPLAN:
      return {
        ...state,
        plans: [...state.plans, action.payload]
      }
      break

    default:
      return state
      break
  }
}
/* create a store with the initial data above and the action */

const store = redux.createStore(reducer)

/* 
  Fire the action
*/
console.log("Before =================== \n", JSON.stringify(store.getState()))

store.dispatch(
  addNewPlan({
    id: "newplanId",
    name: "valentine special",
    cost: 1500
  })
)
/* 
expected output: modified nextState
the store via store.getState() 
*/

console.log("\nAfter =================== \n", JSON.stringify(store.getState()))
