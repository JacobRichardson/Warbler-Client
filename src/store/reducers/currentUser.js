/** 
 * Current User Reducer.
 */

//Imports.
import { SET_CURRENT_USER } from "../action-types";

//Current user's default state.
const DEFAULT_STATE = {

  //If the user is logged in.
  isAuthenticated: false,

  //User information.
  user: {}
};

/**
 * This is the main function that is exported.
 * Handles modifying state regarding the user.
 * @param {Object} state The current state.
 * @param {Object} action The action that was dispatched.
 * @returns {Object} The modified state.
 */
export default (state = DEFAULT_STATE, action) => {

  //Switch on the action type.
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Boolean(Object.keys(action.user).length),
          user: action.user
      };
    default:
      return state;
  }
}