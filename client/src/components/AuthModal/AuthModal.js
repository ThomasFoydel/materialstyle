import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal } from '@material-ui/core';
import Login from './Login';
import Register from './Register';
import { login } from 'redux/auth/actions';
import { connect } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AuthModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({
    register: {
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
    },
    login: {
      email: '',
      password: '',
    },
  });

  const [authPage, setAuthPage] = useState('register');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalStyle = {
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  };

  const handleRegister = () => {
    axios
      .post('/api/auth/register', { formData: formState.register })
      .then((result) => {
        console.log({ result });
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const handleLogin = () => {
    axios
      .post('/api/auth/login', { formData: formState.register })
      .then((result) => {
        console.log({ result });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const ModalBody = (
    <div style={modalStyle} className={classes.paper}>
      {authPage === 'register' ? (
        <Register
          props={{
            handleSubmit: handleRegister,
            setAuthPage,
            formState,
            setFormState,
          }}
        />
      ) : (
        <Login
          props={{
            handleSubmit: handleLogin,
            setAuthPage,
            formState,
            setFormState,
          }}
        />
      )}
    </div>
  );

  return (
    <div>
      <Button type='button' onClick={handleOpen} color='inherit'>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {ModalBody}
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
