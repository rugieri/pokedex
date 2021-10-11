import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((themes) => ({
  AppBar: {
    backgroundColor: 'black',
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    cursor: 'pointer',
    color: 'white',
  },
}));

export default function AppNavigator() {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} position="fixed" variant="h6">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title}>Pokedex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
