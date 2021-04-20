/** 
 * MessageList component.
*/

// Imports.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/actions/user';
import { fetchMessages, deleteMessage, likeMessage, unlikeMessage } from '../store/actions/messages';
import { followUser, unfollowUser } from '../store/actions/user';
import DefaultProfileImg from '../images/default-profile-image.jpg';
import MessageItem from "../components/MessageItem";
import ProfileHeader from '../components/ProfileHeader';

/**
 * The Profile Component.
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {

    /**
     * Creates an instance of Profile.
     * @param {Object} props The props for the component.
     * @memberof Profile
     */
    constructor(props) {

        // Invoke the parent's constructor.
        super(props);
    }

    /**
     * Component did mount function. Fetches the user.
     * @memberof Profile
     */
    componentDidMount() {
        
        // Fetch the user.
        this.props.fetchUser(this.props.match.params.id);

        // Fetch messages.
        this.props.fetchMessages();
    }

    // Render method.
    render() {

        // Retrieve information from props.
        const { user, deleteMessage, likeMessage, unlikeMessage, followUser, unfollowUser, currentUserId} = this.props;

        let messages = this.props.messages.filter(m => m.user._id == user._id);

        // Create a message list.
        let messageList = messages.map(m => (
            <MessageItem 
                key={m._id}
                date={m.createdAt}
                text={m.text}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl}
                likes={m.likes}
                messageCreatorId={m.user._id}
                currentUserId={currentUserId}
                deleteMessage={deleteMessage.bind(this, m.user._id, m._id)}
                likeMessage={likeMessage.bind(this, m)}
                unlikeMessage={unlikeMessage.bind(this, m)}
                isCorrectUser={currentUserId === m.user._id}
            />
        ));

        // Declare the profile header component.
        let profileHeaderComponent;
    
        // If the user has a followees property.
        if (user.followees) {

            // Pass in the props for the profile header component.
            profileHeaderComponent =
                <ProfileHeader
                user={user}
                followUser={followUser}
                unfollowUser={unfollowUser}
                currentUserId={currentUserId}
            />
        }

        // Return JSX.
        return (
            <div className="mt-2">
                <img 
                    src={user.profileImageUrl || DefaultProfileImg} 
                    alt={user.username} 
                    height="300"
                    width="300" 
                    className="img-fluid"
                />
                {profileHeaderComponent}
                {messageList}
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
        user: state.user,
        messages: state.messages,
        currentUserId: state.currentUser.user.id
    }
}

// Export the connect mapping the state to props and passing in dispatch actions.
export default connect(mapStateToProps, { fetchUser, fetchMessages, deleteMessage, likeMessage, unlikeMessage, unfollowUser, followUser })(Profile);


