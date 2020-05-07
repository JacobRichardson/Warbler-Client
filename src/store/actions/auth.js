/** 
 * Auth actions.
 */

// Imports
import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../action-types';
import { addError, removeError } from './errors';

/**
 * Creates an action to be dispatched to the redux reducer.
 * @export {Function} 
 * @param {Object} user The user object.
 * @returns {Object} The action to be dispatched to the reducer.
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

/**
 * Wrapper function for setTokenHeader.
 * @export {Function} The setAuthorizationToken function.
 * @param {String} token The authorization token.
 */
export function setAuthorizationToken(token) {

  // Call set token header with the token.
  setTokenHeader(token);
}

/**
 * Logs a user out.
 * @export {Function} 
 * @returns {Function} A function to log the user out.
 */
export function logout() {

  // Dispatch event.
  return dispatch => {

    // Clear the local storage. This removes the users JWT.
    localStorage.clear();

    // Remove the authorization token.
    setAuthorizationToken(false);

    // Set the current user to an empty user.
    dispatch(setCurrentUser({}));
  }
}

/**
 * Authorizes a user and dispatches an event
 * to the reducer.
 * @export {Function}
 * @param {String} type The auth type.
 * @param {Object} userData information about the user.
 * @returns
 */
export function authUser(type, userData) {

  // Return a dispatch function.
  return dispatch => {

    // Return a new promise.
    return new Promise((resolve, reject) => {

      // Return the api call of post with the user data.
      return apiCall("post", `/api/auth/${type}`, userData)

        // Once the api call is resolved.
        .then(({ token, ...user }) => {

          // Set the jwt token on the local storage.
          localStorage.setItem("jwtToken", token);

          // Set the authorization token.
          setAuthorizationToken(token);

          // Dispatch an event with the set current user action creator 
          // and the user from the api call.
          dispatch(setCurrentUser(user));

          // Remove any previous errors.
          dispatch(removeError());

          // Resolve the promise indicating the API call succeeded.
          resolve();
        })

        // Catch any errors.
        .catch(error => {

          // Dispatch add error.
          dispatch(addError(error.message));

          // Reject the promise.
          reject(error);
        });
    });
  }
}