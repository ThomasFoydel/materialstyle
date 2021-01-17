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

const Register = ({
  props: { handleSubmit, setAuthPage, formState, setFormState },
}) => {
  const classes = useStyles();
  const { username, email, password, confirmpassword } = formState.register;

  const handleChange = ({ target: { value, id } }) => {
    setFormState((formState) => ({
      ...formState,
      register: { ...formState.register, [id]: value },
    }));
  };
  return (
    <div className={classes.register}>
      <h2>Register</h2>
      <FormControl>
        <InputLabel htmlFor='email'>Email address</InputLabel>
        <Input
          id='email'
          value={email}
          aria-describedby='my-helper-text'
          onChange={handleChange}
        />
        <FormHelperText id='my-helper-text'>
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='username'>User Name</InputLabel>
        <Input id='username' value={username} onChange={handleChange} />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input
          id='password'
          value={password}
          type='password'
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor='confirmpassword'>Confirm Password</InputLabel>
        <Input
          id='confirmpassword'
          value={confirmpassword}
          type='password'
          onChange={handleChange}
        />
      </FormControl>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={() => setAuthPage('login')}>
        I already have an account
      </Button>
    </div>
  );
};

export default Register;
