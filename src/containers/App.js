/** 
 * Warbler App.
 */

//Imports.
import React from 'react';
import { Provider } from 'react-redux';
import { configStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'
import Main from './Main';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

//Invoke the config store method to get the initial store.
const store = configStore();

// If a JWT token already exists on local storage.
if(localStorage.jwtToken) {

  // Set the token.
  setAuthorizationToken(localStorage.jwtToken);

  // Prevent someone from manually tampering with jwtToken in local storage.
  try {

    // Set the current user to the result of decoding the token (the payload).
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));

  } catch (e) {

    // Because there is an error, log the user out.
    store.dispatch(setCurrentUser({}));
  }
}

/** 
 * Main app function.
 */
const App = () => {

  return (

    /* beautify preserve:start */
    <Provider store={store}>
      <Router>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
    /* beautify preserve:end */
  );
}

//Export the app.
export default App;