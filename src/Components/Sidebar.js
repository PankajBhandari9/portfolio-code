import React from 'react';
import clsx from 'clsx';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import '../GlobalStyle/Sidebar.css';
import { useStyles } from '../GlobalStyle/SidebarStyle';

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem >
          <ListItemText className="nav">
            Pankaj's Introduction
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button> <ListItemText className="nav"> <a href="#home" className={classes.link}>Home </a></ListItemText></ListItem>
        <ListItem button> <ListItemText className="nav"><a href="#about" className={classes.link}> About </a></ListItemText></ListItem>
        <ListItem button> <ListItemText className="nav"><a href="#services" className={classes.link}> Services</a></ListItemText></ListItem>
        <ListItem button> <ListItemText className="nav"><a href="#contact" className={classes.link}> Contact</a> </ListItemText></ListItem>
      </List>

    </div>
  );

  // dark theme 
  const theme = createTheme({
    palette: {
      background: {
        paper: 'rgba(0,0,0,0.5)',
      }
    },

  });
  return (
    <div>
      <ThemeProvider theme={theme} className={classes.menuStick}>
        <React.Fragment key={'left'}>
          <Button className={classes.menuFix} onClick={toggleDrawer('left', true)}><MenuIcon className={classes.menuIcn} /></Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
      </ThemeProvider>

    </div>
  );
}