// This sets things up so that if there's a typo, i.e 'INCEMENT,' it throws an error.
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
  return updateObject(state, {results: updatedArray});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
    //concat doesn't manipulate the original array, it returns a new one. This updates the state immutably.
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
}

export default reducer;
