import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';

import './App.css';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   background: 'linear-gradient(red, orange)',
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  whitishText: {
    color: '#eee',
  },
  blackishBg: {
    background: '-webkit-linear-gradient(360deg,#030303 10%,#1f1f1f 360%)',
  },
  navbar: {
    // background: '-webkit-linear-gradient(360deg,#e9fbcf 10%,#1d7d8e 360%)',
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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    color: '#222',
    textDecoration: 'none',
  },
}));

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const classes = useStyles();
  return (
    <div className='App'>
      <Router>
        <Navbar props={{ setShowSidebar, classes }} />
        <Sidebar props={{ showSidebar, setShowSidebar, classes }} />
      </Router>
    </div>
  );
}

export default App;
