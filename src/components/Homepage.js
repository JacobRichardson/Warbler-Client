/** 
 * Homepage component.
 */

// Imports.
import React from 'react';
import { Link } from 'react-router-dom';

/** 
 * Stateless functional Homepage component.
 */
const Homepage = () => {

    /** 
     * Return JXS.
    */
    return (

      <div className="home-hero">
          <h1>What's Happening?</h1>
          <h4>New to Warbler?</h4>
          <Link to="/signup" className="btn btn-primary">
              Sign up here
          </Link>
      </div>

    );
}

// Export the Homepage component.
export default Homepage;