/** 
 * Messages Actions.
 */

// Imports.
import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';


/**
 * Load Messages action creator.
 * @export {Function} The loadMessages function.
 * @param {Array<Objects>} messages The messages.
 * @returns
 */
export function loadMessages(messages) {

  // Return the action.
  return {
    type: LOAD_MESSAGES,
    messages
  }
}

/**
 * Handles fetching messages from the backend.
 * @export {Function} The fetchMessages function.
 * @returns {Function} A function to fetch messages.
 */
export function fetchMessages() {

  // Return a dispatch function.
  return async dispatch => {

    try {

      // Retrieve the messages.
      const response = await apiCall("GET", "/api/messages");

      // Load the messages.
      dispatch(loadMessages(response));

    } catch (e) {

      // Add the error.
      addError(e.message);
    }
  }
}