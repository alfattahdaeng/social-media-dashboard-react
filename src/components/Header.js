import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link : {
    color: '#fff',
  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link style={{textDecoration:'none'}} to="/" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              Social Media Dashboard
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
