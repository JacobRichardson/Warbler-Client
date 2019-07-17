/** 
 * Redux store.
 */

//Imports.
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

export function configStore() {

  //Use create store to create the store.
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  //Return the store.
  return store;
}