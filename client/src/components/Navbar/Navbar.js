import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(red, orange)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  darkBg: {
    // background: '-webkit-linear-gradient(360deg,#e9fbcf 10%,#1d7d8e 360%)',
    background: '-webkit-linear-gradient(360deg,#030303 10%,#1f1f1f 360%)',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inherit',
    },
  },
  small: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function Navbar({ props: { setShowSidebar } }) {
  const classes = useStyles();
  console.log({ classes });

  const toggleSideBar = () => {
    setShowSidebar((currentValue) => !currentValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.darkBg}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={toggleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Material Style
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  props: PropTypes.shape({
    setShowSidebar: PropTypes.func.isRequired,
  }),
};

export default Navbar;
