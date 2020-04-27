/** 
 * Auth form component.
*/

// Imports.
import React, { Component } from 'react';

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

        // TODO: Implement this.

    }

    render() {
        
        // Retrieve values from state.
        const { email, username, password, profileImageUrl } = this.state;

        // Return JSX.
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{this.props.heading}</h2>
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
                            {this.props.signUp && (
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// Export the AuthForm component.
export default AuthForm;