/*
 * Error reducer.
 */

//Imports.
import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

/**
 * This is the main function that is exported.
 * Handles modifying state regarding errors.
 * @param {Object} state The current state.
 * @param {Object} action The action that was dispatched.
 * @returns {Object} The modified state.
 */
export default (state = { message: null }, action) => {

  //Switch on the action type.
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.error };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
}