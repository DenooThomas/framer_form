import React from 'react';
import { createUseStyles } from 'react-jss';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { flexColumn } from './assets/flexer';
import colors from './assets/colors';
import Header from './components/Header';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

const useStyles = createUseStyles({
  wrapper: {
    ...flexColumn('nowrap', 'space-around', 'center'),
    minHeight: '100vh',
    backgroundColor: colors.darkblue,
    color: colors.orange,
    fontSize: '1.2rem',
    overflowX: 'hidden',

    '& input:focus': {
      outline: colors.orange,
    },
  },
});

function App() {
  const location = useLocation();
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<SignUp />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
