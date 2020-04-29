/** 
 * Message Timeline component.
*/

// Imports.
import React from 'react';
import MessageList from '../containers/MessageList';

/**
 * Message Timeline Component.
 * @param {Object} props The props for the component.
 * @returns JSX to be rendered.
 */
function MessageTimeline (props) {

    // Return JSX.
    return (
        <div className="row">
            <MessageList />
        </div>
    );
}

// Export the Message Timeline component.
export default MessageTimeline;
