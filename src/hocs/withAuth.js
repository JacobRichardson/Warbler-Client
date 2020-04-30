/** 
 * With Auth Higher Order Component.
 */

// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Export default the withAuth High Order Component.
export default function withAuth(ComponentToBeRendered) {

  /**
   * Authenticate Component. 
   * @class Authenticate
   * @extends {Component}
   */
  class Authenticate extends Component {

    /**
     * Lifecycle method for when the component is going to mount.
     * @memberof Authenticate
     */
    componentWillMount() {

      // If isAuthenticated is false.
      if(this.props.isAuthenticated === false) {

        // Re-route to the sign in page.
        this.props.history.push("/signin");
      }
    }

    /**
     * Lifecycle method for when the component is going to mount.
     * @memberof Authenticate
     */
    componentWillUpdate(nextProps) {

      // If isAuthenticated is false.
      if(nextProps.isAuthenticated === false) {

        // Re-route to the sign in page.
        this.props.history.push("/signin");
      }
    }

    // Render method to render the component.
    render() {

      // Return the component to be render passing along props.
      return <ComponentToBeRendered { ...this.props }
      />
    }
  }

  /**
   * Maps redux state to props for the component.
   * @param {Object} state The Redux state.
   * @returns {Object} The props for the component.
   */
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    }
  }

  // Return the Authenticate Component connecting it to the redux store.
  return connect(mapStateToProps, null)(Authenticate);
}