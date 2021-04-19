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
    const { date, profileImageUrl, text, username, likes, messageCreatorId, currentUserId, deleteMessage, likeMessage, unlikeMessage, isCorrectUser } = props;

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
                    <Link to={"/users/" + messageCreatorId}>@{username} &nbsp;</Link>
                    <span className="text-muted">
                    <Moment className="text-muted" format="DD MM YYYY">
                            {date}
                    </Moment>
                    </span>
                    <p>{text}</p>
                    {isCorrectUser && (
                        <button href="#" className="btn btn-danger" onClick={deleteMessage}>Delete</button>
                    )}
                    {likes.indexOf(currentUserId) >= 0 && (
                        <button href="#" className="btn" onClick={unlikeMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </button>
                    )}
                    {likes.indexOf(currentUserId) === -1 && (
                        <button href="#" className="btn" onClick={likeMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </button>
                    )}
                    <span>{likes.length}</span>
                </div>
            </li>
        </div>
    )
}

// Export the component.
export default MessageItem;