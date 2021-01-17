import React from 'react';
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  register: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '24rem',
  },
}));

const Register = ({ props: { handleSubmit } }) => {
  const classes = useStyles();
  return (
    <div className={classes.register}>
      <h2>Register</h2>
      <FormControl>
        <InputLabel htmlFor='email'>Email address</InputLabel>
        <Input id='email' aria-describedby='my-helper-text' />
        <FormHelperText id='my-helper-text'>
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='username'>User Name</InputLabel>
        <Input id='username' />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input id='password' type='password' />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='confirmpassword'>Confirm Password</InputLabel>
        <Input id='confirmpassword' type='password' />
      </FormControl>
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  );
};

export default Register;
