/** 
 * User Actions.
 */

// Imports.
import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_USER } from '../action-types';


/**
 * Get user action creator.
 * @export {Function} The getUser function.
 * @param {Array<Objects>} user The user.
 * @returns
 */
export function loadUser(user) {

  // Return the action.
  return {
    type: LOAD_USER,
    user
  }
}

/**
 * Handles fetching messages from the backend.
 * @export {Function} The fetchMessages function.
 * @returns {Function} A function to fetch messages.
 */
export function fetchUser(id) {

  // Return a dispatch function.
  return async dispatch => {

    try {

      // Retrieve the messages.
      const user = await apiCall("GET", `/api/users/${id}`);

      // Load the messages.
      dispatch(loadUser(user));

    } catch (e) {

      // Add the error.
      addError(e.message);
    }
  }
}