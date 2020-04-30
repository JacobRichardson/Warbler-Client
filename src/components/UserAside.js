/** 
 * User Aside Component.
*/

// Imports
import React from 'react';
import DefaultProfileImage from '../images/default-profile-image.jpg';

/**
 * The UserAside component.
 * @param {Object} props The props for the component.
 * @returns JSX to be rendered.
 */
function UserAside(props) {

    // Retrieve values from props.
    const { profileImageUrl, username } = props;

    // Return JSX.
    return (
        <aside className="col-sm-2">
           <div className="panel panel-default">
               <div className="panel-body">
                    <img 
                        className="img-thumbnail"
                        src={profileImageUrl || DefaultProfileImage} 
                        alt={username} 
                        width="200px"
                        height="200px"
                    /> 
               </div>
                <h3 className="p-1">{username}</h3>
           </div>
        </aside>
    );
}

// Export the user aside component.
export default UserAside;