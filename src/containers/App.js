/** 
 * Warbler App.
 */

//Imports.
import React from 'react';
import { Provider } from 'react-redux';
import { configStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';

//Invoke the config store method to get the initial store.
const store = configStore();

/** 
 * Main app function.
 */
const App = () => {

  return (

    /* beautify preserve:start */
    <Provider store={store}>
      <Router>
        <div>
          Hello world.
        </div>
      </Router>
    </Provider>
    /* beautify preserve:end */
  );
}

//Export the app.
export default App;