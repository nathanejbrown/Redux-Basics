// This sets things up so that if there's a typo, i.e 'INCEMENT,' it throws an error.
import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
    //concat doesn't manipulate the original array, it returns a new one. This updates the state immutably.
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result})
      };
    case actionTypes.DELETE_RESULT:
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
