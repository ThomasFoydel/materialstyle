import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal } from '@material-ui/core';
import Login from './Login';
import Register from './Register';
import { login } from 'redux/auth/actions';
import { connect } from 'react-redux';

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

  const handleRegister = () => {};
  const handleLogin = () => {};

  const ModalBody = (
    <div style={modalStyle} className={classes.paper}>
      {authPage === 'register' ? (
        <Register props={{ handleSubmit: handleRegister, setAuthPage }} />
      ) : (
        <Login props={{ handleSubmit: handleLogin, setAuthPage }} />
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
