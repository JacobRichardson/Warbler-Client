/** 
 * The main component.
*/

// Imports.
import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';

/** 
 * Stateless functional component.
*/
const Main = props => {

    /** 
     * Return JSX.
    */
    return (
       <div className="container">
           <Switch>
               <Route exact path="/" render={props => <Homepage {...props}  />}>

               </Route>
           </Switch>
       </div>
    );
}

/**
 * Maps redux state to props for the component.
 * @param {Object} state The Redux state.
 * @returns {Object} The props for the component.
 */
function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

// Export with router connecting the redux state to the component.
export default withRouter(connect(mapStateToProps, null)(Main));