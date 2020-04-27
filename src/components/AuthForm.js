/** 
 * Auth form component.
*/

// Imports.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeError } from '../store/actions/errors';

/**
 * The AuthForm Component.
 * @class AuthForm
 * @extends {Component}
 */
class AuthForm extends Component {

    /**
     * Creates an instance of AuthForm.
     * @param {Object} props The props for the component.
     * @memberof AuthForm
     */
    constructor(props) {

        // Pass the props to the parent class.
        super(props);

        // Set the default state.
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: "",
        };

        // Retrieve values from props.
        const { history, removeError } = props;

        // Listen for any route changes.
        history.listen(() => {

            // Remove any errors.
            removeError();
        });
    }

    /**
     * Updates the state when a change event occurs.
     * @param {Event} e The on-change event.
     * @memberof AuthForm
     */
    handleChange = e => {

        // Update the state for the value.
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    /**
     * Handles form submission.
     * @param {Event} e The on-change event.
     * @memberof AuthForm
     */
    handleSubmit = e => {

        // Prevent the default action from happening.
        e.preventDefault();

        // Set the auth type based on the signup props.
        const authType = this.props.signUp ? "signup" : "signin";

        // Invoke on auth with the auth type and the state.
        this.props.onAuth(authType, this.state).then(() => {

            // Retrieve history from the props.
            const { history } = this.props;

            // Push the '/' route to go to the homepage.
            history.push('/');
        })
        // Catch the error.
        .catch(() => {

            // Simply return.
            return;
        });
    }

    render() {
        
        // Retrieve values from state.
        const { email, username, password, profileImageUrl } = this.state;

        // Retrieve values from props.
        const {signUp, heading, buttonText, errors} = this.props;

        // Return JSX.
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && (
                                <div className="alert alert-danger">
                                    {errors.message}
                                </div>
                            )}
                            <label htmlFor="email">Email:</label>
                            <input 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                type="text" 
                                value={email} 
                                onChange={this.handleChange} 
                            />
                            <label htmlFor="password">Password:</label>
                            <input 
                                className="form-control" 
                                id="password" 
                                name="password" 
                                type="password" 
                                onChange={this.handleChange} 
                            />
                            {/* If signup prop is truthy. */}
                            {signUp && (
                                <div>
                                    <label htmlFor="username">Username:</label>
                                    <input 
                                        className="form-control" 
                                        id="username" 
                                        name="username" 
                                        type="text" 
                                        value={username} 
                                        onChange={this.handleChange} 
                                    />
                                    <label htmlFor="image-url">Image URL:</label>
                                    <input 
                                        className="form-control" 
                                        id="image-url" 
                                        name="profileImageUrl" 
                                        type="text"
                                        value={profileImageUrl}
                                        onChange={this.handleChange} 
                                    />
                                </div>
                            )}
                            <button type="submit"className="btn btn-primary btn-block btn-lg mt-4">
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Maps redux state to props for the component.
 * @param {Object} state The Redux state.
 * @returns {Object} The props for the component.
 */
function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}

/** 
 * Export the component connecting it to the redux store,
 * mapping state to props, and mapping dispatch to props.
 * This will automatically dispatch actions when the action
 * creator is called.
*/
export default connect(mapStateToProps, { removeError })(AuthForm);