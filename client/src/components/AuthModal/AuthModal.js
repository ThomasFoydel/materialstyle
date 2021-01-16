import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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

export default function AuthModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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

  const ModalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Login</h2>
      <p id='simple-modal-description'>register</p>
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
}
