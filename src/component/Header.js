import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
      <li>
            <Link to="/signup">signup</Link>
        </li>
        <li>
            <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;