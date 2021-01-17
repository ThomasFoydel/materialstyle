import React from 'react';
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Login = ({ props: { handleSubmit } }) => {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <h2>Login</h2>
      <FormControl>
        <InputLabel htmlFor='email'>Email address</InputLabel>
        <Input id='email' aria-describedby='my-helper-text' />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input id='password' type='password' />
      </FormControl>
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  );
};

export default Login;
