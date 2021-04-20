/** 
 * ProfileHeader Component.
*/

// Imports.
import React from 'react';

/**
 * ProfileHeader Component
 * @param {Object} props The props for the component.
 * @returns JSX for the component.
 */
function ProfileHeader(props) {

    // Retrieve values from props.
    const { user, followUser, unfollowUser, currentUserId } = props;

    console.log(user);

    // Return JSX.
    return (
        <div className="mt-2 mb-2">
            <span><a href="#" className="mr-2">@{user.username}</a></span>
            <span className="mr-2">{user.followees.length} <span className="text-muted">Followers</span></span>
            {user.followees.indexOf(currentUserId) >= 0 && (
                <button href="#" className="btn btn-danger" onClick={unfollowUser.bind(this, user)}>Unfollow</button>
            )}
            {user.followees.indexOf(currentUserId) === -1 && (
                <button href="#" className="btn btn-primary" onClick={followUser.bind(this, user)}>Follow</button>
            )}
        </div>
    )
}

// Export the component.
export default ProfileHeader;