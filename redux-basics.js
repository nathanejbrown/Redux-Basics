const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
// (state = initialState) tells the function that if it doesn't have a value for state, it should use initialState as the default.
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

// Store
const store = createStore(rootReducer);

// Subscription -- only see the log when the state changes. 
store.subscribe(() => {
  console.log('[Subscription]', store.getState())
})

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
