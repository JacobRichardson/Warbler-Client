/** 
 * User Actions.
 */

// Imports.
import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_USER, CHANGE_USER } from '../action-types';


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
 * Change user action creator.
 * @export {Function} The updateUser function.
 * @param {Array<Objects>} user The user.
 * @returns
 */
export function changeUser(user) {

  // Return the action.
  return {
    type: CHANGE_USER,
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

/**
 * Handles following a user.
 * @export {Function} The follow user function.
 * @returns {Function} A function to follow users.
 */
export function followUser(user) {


  //TODO: REQ.PARAMS should be sent from the UI using the url route to get the user id / user object

  // Return a dispatch function.
  return async (dispatch, getState) => {

    // Retrieve the current user.
    const { currentUser } = getState();

    // If the current user hasn't already followed the user.
    if(user.followees.indexOf(currentUser) === -1) {

      // Add the current user to the followees array.
      user.followees.push(currentUser.user.id);
    }

    try {

      // Dispatch an update user action with the updated user.
      dispatch(updateUser(user));

    } catch (e) {

      // Log the error.
      console.log(e);

      // Add the error.
      addError(e.message);
    }
  }
}

/**
 * Handles un-following a user.
 * @export {Function} The un-follow user function.
 * @returns {Function} A function to un-follow users.
 */
export function unfollowUser(user) {

  // Return a dispatch function.
  return async (dispatch, getState) => {

    // Retrieve the current user.
    const { currentUser } = getState();

    // Remove the current user from the followees list.
    user.followees = user.followees.filter(followee => followee !== currentUser.user.id);

    try {

      // Dispatch an update user action with the updated user.
      dispatch(updateUser(user));

    } catch (e) {

      // Log the error.
      console.log(e);

      // Add the error.
      addError(e.message);
    }
  }
}

/**
 * Handles updating a user from the backend.
 * @export {Function} The update user function.
 * @returns {Function} A function to update users.
 */
export function updateUser(user) {

  // Return a dispatch function.
  return async dispatch => {

    try {

      // Make the api to update the message.
      await apiCall("PATCH", `/api/users/${user._id}`, user);

      // Dispatch the change user event.
      dispatch(changeUser(user));

      // Refetch the user for the updated information.
      dispatch(fetchUser(user._id));

    } catch (e) {

      // Log the error.
      console.log(e);

      // Add the error.
      addError(e.message);
    }
  }
}