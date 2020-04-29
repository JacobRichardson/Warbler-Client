/** 
 * API services module.
 */

// Imports.
import axios from 'axios';

/**
 * This function handles setting the token header
 * in order to allow requests to be authorized.
 * @export {Function} The setTokenHeader function.
 * @param {String} token The JWT authorization token.
 */
export function setTokenHeader(token) {

  // If token is truthy.
  if(token) {

    // Set the token onto axios.
    axios.defaults.headers.common['Authorization'] = `Bearer: ${token}`;
  }
  // Token is not truthy.
  else {

    // Remove the token.
    delete axios.defaults.headers.common['Authorization']
  }
}

/**
 * A wrapper around axios API call.
 * @param {String} method The HTTP verb to be used.
 * @param {String} path The route path / endpoint.
 * @param {Object} [data] data in JSON form for POST requests.
 */
export function apiCall(method, path, data) {

  // Return a new promise.
  return new Promise((resolve, reject) => {

    // Return the axios call with the method, path, and data.
    return axios[method.toLowerCase()](path, data).then(res => {

      // Resolve the promise with the data.
      return resolve(res.data);
    }).catch(err => {

      // Reject the promise with the error.
      return reject(err.response.data.error);
    });
  });
}