/** 
 * The main component.
*/

// Imports.
import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';

/** 
 * Stateless functional component.
*/
const Main = props => {

    // Retrieve authUser from props.
    const { authUser } = props;

    /** 
     * Return JSX.
    */
    return (
       <div className="container">
           <Switch>
               <Route exact path="/" render={props => <Homepage {...props}  />} />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm 
                            onAuth={authUser} 
                            buttonText="Log in" 
                            heading="Welcome Back" 
                            {...props} 
                        />
                    );
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm 
                            onAuth={authUser} 
                            buttonText="Sign up" 
                            heading="Join Warbler Today!" 
                            signUp 
                            {...props} 
                        />
                    );
                }} />
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

// Export with router connecting the redux state to the component
// by mapping state to props and passing in dispatch events.
export default withRouter(connect(mapStateToProps, { authUser })(Main));