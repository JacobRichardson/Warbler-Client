/** 
 * Messages Actions.
 */

// Imports.
import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_FOLLOWEES, LOAD_FOLLOWERS, REMOVE_FOLLOWEE } from '../action-types';


/**
 * Load followees action creator.
 * @export {Function} The loadFollowees function.
 * @param {Array<Object>} followees The followees.
 * @returns {Object} The action.
 */
export function loadFollowees(followees) {

  // Return the action.
  return {
    type: LOAD_FOLLOWEES,
    followees
  }
}

/**
 * Load followers action creator.
 * @export {Function} The loadFollowees function.
 * @param {Array<Object>} followers The followers.
 * @returns {Object} The action.
 */
export function loadFollowers(followers) {

  // Return the action.
  return {
    type: LOAD_FOLLOWERS,
    followers
  }
}

/**
 * Remove followee action creator.
 * @export {Function} The removeFollowee function.
 * @param {String} id The id of the followee.
 * @returns {Object} The action.
 */
export function removeFollowee(id) {

  // Return the action.
  return {
    type: REMOVE_FOLLOWEE,
    id
  }
}

/**
 * Handles deleting a message from the backend.
 * @export {Function} The deleteMessage function.
 * @param {String} user_id The user's id.
 * @param {String} message_id The message's id.
 * @returns {Function} A function to delete a message.
 */
export function deleteMessage(user_id, message_id) {

  // Return a dispatch function.
  return async dispatch => {


    try {

      // TODO: Implement.

    } catch (e) {

      // Add the error.
      dispatch(addError(e.message));
    }
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
export function followUser(text) {

  // Return an async dispatch function.
  return async (dispatch, getState) => {

    // Retrieve the current user from the state.
    const { currentUser } = getState();

    // Retrieve the id of the current user.
    const id = currentUser.user.id;

    try {

      // TODO: Implement.

    }
    // Catch any errors.
    catch (e) {

      // Add the error.
      dispatch(addError(e.message));
    }
  }
}