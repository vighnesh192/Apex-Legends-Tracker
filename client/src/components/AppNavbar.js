import React from 'react';
import { Link } from 'react-router-dom';
import './AppNavbar.css';

function AppNavbar() {
  return (
    <nav>
      <Link to="/" className="Link">
        <h2>Stats Tracker</h2>
      </Link>
      <ul>
          <li>
              <Link className="Link" to="/">
                  Home
              </Link>
          </li>
          <li>
              <Link className="Link" to="/about">
                  About
              </Link>
          </li>
      </ul>
    </nav>
  );
}

export default AppNavbar;