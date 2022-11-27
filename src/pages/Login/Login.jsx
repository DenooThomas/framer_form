import React from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { flexColumn } from '../../assets/flexer';
import colors from '../../assets/colors';

const useStyles = createUseStyles({
  form: {
    ...flexColumn('nowrap', 'flex-start', 'flex-start'),
    backgroundColor: colors.grey,
    minWidth: 450,
    padding: 50,
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
});

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: '100vw',
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

function Login() {
  const classes = useStyles();
  return (
    <motion.form
      className={classes.form}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className={classes.title}>Login</h1>
      <label className={classes.label} htmlFor="username">
        Username
        <input className={classes.input} type="text" id="username" />
      </label>
      <label className={classes.label} htmlFor="password">
        Password
        <input className={classes.input} type="password" id="password" />
      </label>
      <motion.button
        type="button"
        className={classes.button}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Login
      </motion.button>
    </motion.form>
  );
}

export default Login;
