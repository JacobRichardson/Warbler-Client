/** 
 * API services module.
 */

// Imports.
import axios from 'axios';

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
    return axios[method](path, data).then(res => {

      // Resolve the promise with the data.
      return resolve(res.data);
    }).catch(err => {

      // Reject the promise with the error.
      return reject(err.response.data.error);
    });
  });
}