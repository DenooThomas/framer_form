import React, { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { AnimatePresence, motion } from 'framer-motion';
import colors from 'assets/colors';

import { flexColumn } from '../../assets/flexer';

const useStyles = createUseStyles({
  form: {
    ...flexColumn('nowrap', 'flex-start', 'flex-start'),
    backgroundColor: colors.grey,
    width: 450,
    padding: 50,
    paddingBottom: 20,
    borderRadius: '0.6rem',
  },
  title: {
    width: '100%',
    marginBottom: 45,
    textAlign: 'center',
  },
  label: {
    width: '100%',
    fontSize: '1.3rem',
    marginBottom: 2,
  },
  input: {
    width: '100%',
    fontSize: '1.2rem',
    padding: '15px 8px',
    marginBottom: 8,
    borderRadius: '0.6rem',
    color: colors.grey,
  },
  button: {
    color: colors.grey,
    fontSize: '1.4rem',
    border: 'none',
    backgroundColor: colors.orange,
    padding: '15px 35px',
    margin: '20px auto',
    borderRadius: '0.6rem',
  },
  note: {
    backgroundColor: '#23232D',
    fontSize: '0.9rem',
    padding: 10,
    margin: '10px 0 20px',
    borderRadius: '0.6rem',
    maxWidth: '100%',
  },
});

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: '-100vw',
  },
};

const noteVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
};

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUp() {
  const usernameRef = useRef(null);
  const [username, setUsername] = useState('');
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    setIsValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setIsValidPassword(result);
  }, [password]);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  const classes = useStyles();
  return (
    <motion.form
      className={classes.form}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className={classes.title}>Sign up</h1>
      <label className={classes.label} htmlFor="username">
        Username
        <input
          className={classes.input}
          type="text"
          ref={usernameRef}
          id="username"
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
          required
          onFocus={() => setUsernameFocus(true)}
          onBlur={() => setUsernameFocus(false)}
        />
      </label>
      <AnimatePresence>
        {usernameFocus && username && !isValidUsername
      && (
      <motion.ul
        key="usernamenote"
        className={classes.note}
        variants={noteVariants}
      >
        <li>4 to 24 characters.</li>
        <li>Must begin with a letter.</li>
        <li>
          <b>Letters, numbers, _ </b>
          and
          <b> - </b>
          allowed
        </li>
      </motion.ul>
      )}
      </AnimatePresence>

      <label className={classes.label} htmlFor="password">
        Password
        <input
          className={classes.input}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
          required
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
      </label>
      <AnimatePresence>
        {passwordFocus && password && !isValidPassword && (
        <motion.p
          key="passwordnote"
          className={classes.note}
          variants={noteVariants}
        >
          8 to 24 characters.
          <br />
          Must include a lowercase and uppercase letter, a number and a special character.
          <br />
          Allowed special characters are:
          <b>! @ # $ %</b>
        </motion.p>
        )}
      </AnimatePresence>

      <label className={classes.label} htmlFor="email">
        Email
        <input
          className={classes.input}
          type="email"
          id="email"
        />
      </label>

      <button type="button" className={classes.button}>Sign up</button>
    </motion.form>
  );
}

export default SignUp;
