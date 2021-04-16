/** 
 * Messages Actions.
 */

// Imports.
import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE, CHANGE_MESSAGE } from '../action-types';


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
 * Remove message action creator.
 * @export {Function} The removeMessage function.
 * @param {String} id The id of the message to be removed.
 * @returns {Object} The action.
 */
export function removeMessage(id) {

  // Return the action.
  return {
    type: REMOVE_MESSAGE,
    id
  }
}

/**
 * Remove message action creator.
 * @export {Function} The removeMessage function.
 * @param {String} id The id of the message to be removed.
 * @returns {Object} The action.
 */
export function changeMessage(id) {

  // Return the action.
  return {
    type: CHANGE_MESSAGE,
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

      // Delete the message from the backend.
      await apiCall("delete", `/api/users/${user_id}/messages/${message_id}`);

      // Dispatch the remove message action with the message id.
      dispatch(removeMessage(message_id));

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
/**
 * This function will make changes to the message in order to like it
 * and then dispatch and update message action.
 * @export {Function} The likeMessage function.
 * @param {Object} message The message that is being liked.
 */
export function likeMessage(message) {

  return async (dispatch, getState) => {

    // Retrieve the current user.
    const { currentUser } = getState();

    // If the user hasn't already liked the post.
    if(message.likes.indexOf(currentUser) === -1) {

      // Add the current user to the likes array.
      message.likes.push(currentUser.user.id);
    }

    try {

      // Dispatch an update message action with the new message.
      dispatch(updateMessage(message));

    } catch (e) {

      // Set e to an empty object if it isn't defined.
      e = e || {}

      // Log the error.
      console.log(e);

      // Add the error.
      dispatch(addError(e.message));
    }
  }
}

/**
 * This function handles un-liking a message.
 * @export {Function} The unlikeMessage function.
 * @param {Object} message The message that is being un-liked.
 */
export function unlikeMessage(message) {

  return async (dispatch, getState) => {

    // Retrieve the current user.
    const { currentUser } = getState();

    // Remove the user from the likes.
    message.likes = message.likes.filter(like => like !== currentUser.user.id);

    try {

      // Dispatch an update message action with the new message.
      dispatch(updateMessage(message));

    } catch (e) {

      // Set e to an empty object if it is undefined.
      e = e || {}

      // Log the error.
      console.log(e);

      // Add the error.
      dispatch(addError(e.message));
    }
  }
}

/**
 * This action handles updating a new message.
 * @export {Function} The updateMessage function.
 * @param {Object} text The message object.
 * @returns {Function} A function to update the message.
 */
export function updateMessage(message) {

  return async (dispatch, getState) => {

    try {

      // Make a patch call to this message with the update message data.
      await apiCall('patch', `/api/users/${message.user._id}/messages/${message._id}`, message)

      // Dispatch the change message event.
      dispatch(changeMessage(message));

    } catch (e) {

      // Set e to an empty object if it is undefined.
      e = e || {}

      // Log the error.
      console.log(e);

      // Add the error.
      dispatch(addError(e.message));
    }
  }
}