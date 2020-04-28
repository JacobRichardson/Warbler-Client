/** 
 * Messages Reducer.
 */

// Imports
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';

/**
 * Handles modifying state in regards to messages.
 * @param {Array} [state=[]] The state.
 * @param {Object} action The action object.
 */
function message(state = [], action) {

  // Switch on the action type.
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages];
    case REMOVE_MESSAGE:
      // TODO: Implement.
      break;
    default:
      return state;
  }
}

// Export the message reducer.
export default message;