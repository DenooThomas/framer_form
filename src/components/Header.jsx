import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="signup">Signup</Link>
      <Link to="login">Login</Link>
    </nav>
  );
}

export default Header;
