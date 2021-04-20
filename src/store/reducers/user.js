/** 
 * User Reducer.
 */

// Imports
import { LOAD_USER } from '../action-types';

/**
 * Handles modifying state in regards to users.
 * @param {Array} [state=[]] The state.
 * @param {Object} action The action object.
 */
function user(state = {}, action) {

  // Switch on the action type.
  switch (action.type) {
    case LOAD_USER:
      return action.user;
    default:
      return state;
  }
}

// Export the user reducer.
export default user;