import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { flexRow } from 'assets/flexer';

const useStyles = createUseStyles({
  nav: {
    ...flexRow('nowrap', 'space-around', 'center'),
    width: 450,
    padding: '40px 0',
    marginBottom: '1rem',
  },
});
function Header() {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Link to="signup">Sign up</Link>
      <Link to="login">Login</Link>
    </nav>
  );
}

export default Header;
