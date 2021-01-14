import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
  },
}));

const toggleSideBar = () => {};

export default function ButtonAppBar() {
  const classes = useStyles();
  console.log({ classes });
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
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';

// const Navbar = () => {
//   return (
//     <div>
//       <AppBar />
//     </div>
//   );
// };

// export default Navbar;
