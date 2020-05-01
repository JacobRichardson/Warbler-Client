/** 
 * MessageForm Component.
*/

// Imports.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages'

/**
 * Message Form Component.
 * @class MessageForm
 * @extends {Component}
 */
class MessageForm extends Component {

    /**
     * Creates an instance of MessageForm.
     * @param {Object} props The props for the component.
     * @memberof MessageForm
     */
    constructor(props) {

        // Invoke parent's constructor.
        super(props);

        // Set default state.
        this.state = {
            message: ""
        };
    }

    /**
     * Handles creating a new message.
     * @param {Event} event The form submission event.
     * @memberof MessageForm
     */
    handleNewMessage = event => {

        // Prevent the default action.
        event.preventDefault();

        // Use the postNewMessage action with what the user typed in
        // in order to create the message.
        this.props.postNewMessage(this.state.message);

        // Clear the message.
        this.setState({message: ""});

        // Move the user back to their timeline.
        this.props.history.push('/');

    }

    // Render method to render the component..
    render() {

        // Return JSX.
        return (
            <div className="message-form-container">
                <h2>Post a new message on your timeline!</h2>
                <form className="message-form mt-5" onSubmit={this.handleNewMessage}>

                    {/* If there are any errors. */}
                    {this.props.errors.message && (
                        <div className="alert alert-danger">
                            {this.props.errors.message}
                        </div>
                    )}

                    <input
                        type="text"
                        className="form-control"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value})}
                    />

                    <button className="btn btn-success mt-3 float-right" type="submit">
                        Add my message
                    </button>

                </form>
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

// Export connecting the redux state to the component
// by mapping state to props and passing in dispatch events.
export default connect(mapStateToProps, { postNewMessage })(MessageForm);