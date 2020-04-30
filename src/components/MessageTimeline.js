/** 
 * Message Timeline component.
*/

// Imports.
import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';

/**
 * Message Timeline Component.
 * @param {Object} props The props for the component.
 * @returns JSX to be rendered.
 */
function MessageTimeline (props) {

    // Retrieve values from props.
    const { profileImageUrl, username} = props;

    // Return JSX.
    return (
        <div className="row">
            <UserAside 
                profileImageUrl={profileImageUrl}
                username={username}
            />
            <MessageList />
        </div>
    );
}

// Export the Message Timeline component.
export default MessageTimeline;
