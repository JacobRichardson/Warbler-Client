/** 
 * MessageList component.
*/

// Imports.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../store/actions/messages';
import MessageItem from "../components/MessageItem";

/**
 * The MessageList Component.
 * @class MessageList
 * @extends {Component}
 */
class MessageList extends Component {

    /**
     * Creates an instance of MessageList.
     * @param {Object} props The props for the component.
     * @memberof MessageList
     */
    constructor(props) {

        // Invoke the parent's constructor.
        super(props);
    }

    /**
     * Component did mount function. Fetches messages.
     * @memberof MessageList
     */
    componentDidMount() {

        // Fetch messages.
        this.props.fetchMessages();
    }

    // Render method.
    render() {

        // Retrieve the messages from props.
        const { messages } = this.props;

        // Create a message list.
        let messageList = messages.map(m => (
            <MessageItem 
                key={m._id}
                date={m.createdAt}
                text={m.text}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl}
            />
        ));

        // Return the message list.
        return messageList;
    }
}

/**
 * Maps redux state to props for the component.
 * @param {Object} state The Redux state.
 * @returns {Object} The props for the component.
 */
function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

// Export the connect mapping the state to props and passing in dispatch actions.
export default connect(mapStateToProps, { fetchMessages })(MessageList);