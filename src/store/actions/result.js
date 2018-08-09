import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  }
}

// This works because of the Thunk middleware, which allows you to run asynchronous code.
export const storeResult = (result) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result))
    }, 2000);
  }
}

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: id
  }
}
