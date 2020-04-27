/** 
 * Navbar Component.
*/

// Imports.
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';
import { logout } from '../store/actions/auth';

/**
 * Navbar Component.
 * @class Navbar
 * @extends {Component}
 */
class Navbar extends Component {

    /**
     * Handles logging a user out.
     * @param {Event} e The event object.
     * @memberof Navbar
     */
    logout = e => {

        // Prevent the default action.
        e.preventDefault();

        // Invoke the logout function. 
        this.props.logout();
    }

    /**
     * Render method to render the component.
     */
    render() {

        // Retrieve values from props.
        const { currentUser, logout } = this.props;

        // Return JSX.
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand"> 
                            <img src={Logo} alt="Warbler Home" />
                        </Link>
                    </div>
                    {/* If the user is authenticated. */}
                    {currentUser.isAuthenticated ? 
                        (
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to={`/users/${currentUser.id}/messages/new`} >
                                        New Message
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={logout}>Log out</a>
                                </li>
                            </ul>
                        )
                        // The user is not authenticated.
                        : 
                        (
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
        )
    }
}

/**
 * Maps redux state to props for the component.
 * @param {Object} state The Redux state.
 * @returns {Object} The props for the component.
 */
function mapStateToProps(state) {

    // Return the props.
    return {
        currentUser: state.currentUser
    };
}

// Export the component using the connect function, mapStateToProps, and the Navbar component.
export default connect(mapStateToProps, { logout })(Navbar);