import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Sidebar({
  props: { showSidebar, setShowSidebar, classes },
}) {
  return (
    <div>
      <Drawer
        anchor={'left'}
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
      >
        <div
          className={clsx(classes.list)}
          role='presentation'
          onClick={() => setShowSidebar(false)}
          onKeyDown={() => setShowSidebar(false)}
        >
          <List>
            {['Home', 'About', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <Link to={`/${text}`} className={classes.link}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  props: PropTypes.shape({
    showSidebar: PropTypes.bool.isRequired,
    setShowSidebar: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }),
};
