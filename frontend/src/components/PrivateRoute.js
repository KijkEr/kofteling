import React from 'react';
import { Route, Redirect, BrowserRouter as Router, Link} from 'react-router-dom';
import { useAuth } from '../context/auth.js';
   
export default function PrivateRoute() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    );
  }

// export default PrivateRoute();