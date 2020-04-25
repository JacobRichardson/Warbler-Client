/** 
 * Navbar Component.
*/

// Imports.
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';

/**
 * Navbar Component.
 * @class Navbar
 * @extends {Component}
 */
class Navbar extends Component {

    /**
     * Render method to render the component.
     */
    render() {

        // Return JSX.
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand"> 
                            <img src={Logo} alt="Warbler Home" />
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Login</Link>
                        </li>
                    </ul>
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
export default connect(mapStateToProps, null)(Navbar);