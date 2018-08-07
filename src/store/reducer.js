const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      //this is one way to update state, but is a long way of going about it.
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1
      return newState;
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value
      };
    case 'STORE_RESULT':
    //concat doesn't manipulate the original array, it returns a new one. This updates the state immutably.
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      };
    case 'DELETE_RESULT':
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      // This returns a new array with all items where the id of the item doesn't match the one that's passed in.
      const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }

  // return state;
}

export default reducer;
