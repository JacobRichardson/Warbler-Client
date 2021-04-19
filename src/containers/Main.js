/** 
 * The main component.
*/

// Imports.
import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import MessageForm from '../components/MessageForm';
import Profile from '../containers/Profile';
import { authUser } from '../store/actions/auth';
import withAuth from '../hocs/withAuth';

/** 
 * Stateless functional component.
*/
const Main = props => {

    // Retrieve authUser from props.
    const { authUser, currentUser } = props;

    /** 
     * Return JSX.
    */
    return (
       <div className="container">
           <Switch>
               <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props}  />} />
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
                {/* New Message Route */}
                <Route
                    path="/users/:id/messages/new"
                    component={withAuth(MessageForm)}
                />
                {/* Profile Page Route */}
                <Route
                    path="/users/:id"
                    component={withAuth(Profile)}
                />
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