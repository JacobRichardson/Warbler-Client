/** 
 * MessageItem Component.
*/

// Imports.
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

/**
 * MessageItem Component
 * @param {Object} props The props for the component.
 * @returns JSX for the component.
 */
function MessageItem(props) {

    // Retrieve values from props.
    const { date, profileImageUrl, text, username } = props;

    // Return JSX.
    return (
        <div className="mb-3">
            <li className="list-group-item">
                <img 
                    src={profileImageUrl || DefaultProfileImg} 
                    alt={username} 
                    height="100"
                    width="100" 
                    className="timeline-image"
                />
                <div className="message-area p-3">
                    <Link to="/">@{username} &nbsp;</Link>
                    <span className="text-muted">
                        <Moment className="text-muted" format="DD MM YYYY">
                            {date}
                        </Moment>
                    </span>
                    <p>{text}</p>
                </div>
            </li>
        </div>
    )
}

// Export the component.
export default MessageItem;