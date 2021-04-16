/** 
 * Messages Reducer.
 */

// Imports
import { LOAD_MESSAGES, REMOVE_MESSAGE, CHANGE_MESSAGE } from '../action-types';

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
      return state.filter(message => message._id !== action.id);
    case CHANGE_MESSAGE:
      return state.map(message => message._id === action.id ? Object.assign(message, action) : message);
    default:
      return state;
  }
}

// Export the message reducer.
export default message;