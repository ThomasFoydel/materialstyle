import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import AuthModal from 'components/AuthModal/AuthModal';

function Navbar({ props: { setShowSidebar, classes } }) {
  const toggleSideBar = () => {
    setShowSidebar((currentValue) => !currentValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        className={clsx(
          classes.navbar,
          classes.blackishBg,
          classes.whitishText
        )}
      >
        <Toolbar className={classes.whitishText}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={toggleSideBar}
          >
            <MenuIcon className={classes.whitishText} />
          </IconButton>
          <Typography
            variant='h6'
            className={clsx(classes.title, classes.whitishText)}
          >
            Material Style
          </Typography>
          <AuthModal />
          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  props: PropTypes.shape({
    setShowSidebar: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }),
};

export default Navbar;
