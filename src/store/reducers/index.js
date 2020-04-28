/*
 * Index file for all reducers.
 */

//Imports
import { combineReducers } from "redux";
import currentUser from './currentUser';
import errors from "./errors";
import messages from './messages';

//Use combine reducers to combine all the reducers.
const rootReducer = combineReducers({
  currentUser,
  errors,
  messages
});

//Export the root reducer.
export default rootReducer;