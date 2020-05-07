/** 
 * Error actions.
 */

// Imports.
import { ADD_ERROR, REMOVE_ERROR } from '../action-types';

/**
 * Add error action creator.
 * @export {Function} The addError function.
 * @param {Object} error The error object.
 * @returns {Object} The action to be dispatched.
 */
export function addError(error) {

  // Return the action object with type and error.
  return {
    type: ADD_ERROR,
    error
  }
}

/**
 * Remove error action creator.
 * @export {Function} The removeError function.
 * @returns {Object} The action to be dispatched.
 */
export function removeError() {

  // Return the action object with type and error.
  return {
    type: REMOVE_ERROR
  }
}