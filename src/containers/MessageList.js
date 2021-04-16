/** 
 * MessageList component.
*/

// Imports.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, deleteMessage, likeMessage, unlikeMessage } from '../store/actions/messages';
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
        const { messages, deleteMessage, likeMessage, unlikeMessage, currentUserId } = this.props;

        // Create a message list.
        let messageList = messages.map(m => (
            <MessageItem 
                key={m._id}
                date={m.createdAt}
                text={m.text}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl}
                likes={m.likes}
                currentUserId={currentUserId}
                deleteMessage={deleteMessage.bind(this, m.user._id, m._id)}
                likeMessage={likeMessage.bind(this, m)}
                unlikeMessage={unlikeMessage.bind(this, m)}
                isCorrectUser={currentUserId === m.user._id}
            />
        ));

        // Return JSX.
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id="messages">
                        {messageList}
                    </ul>
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
        messages: state.messages,
        currentUserId: state.currentUser.user.id
    }
}

// Export the connect mapping the state to props and passing in dispatch actions.
export default connect(mapStateToProps, { fetchMessages, deleteMessage, likeMessage, unlikeMessage })(MessageList);