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

/**
 * This action handles creating a new message.
 * @export {Function} The postNewMessage function.
 * @param {String} text The new message text.
 * @returns {Object} An empty object.
 */
export function postNewMessage(text) {

  // Return an async dispatch function.
  return async (dispatch, getState) => {

    // Retrieve the current user from the state.
    const { currentUser } = getState();

    // Retrieve the id of the current user.
    const id = currentUser.user.id;

    try {

      // Post the message to the api using the provided text.
      await apiCall('post', `/api/users/${id}/messages`, { text });

      // Return an empty object.
      return {};

    }
    // Catch any errors.
    catch (e) {

      // Add the error.
      dispatch(addError(e.message));
    }
  }
}