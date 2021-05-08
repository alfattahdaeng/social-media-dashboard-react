import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

const useStyles = makeStyles (theme => ({
  cardStyle: {
    margin: '15px 15px',
    padding: '10px',
    width: '25%',
    height: 150,
    display: 'inline-block',
    backgroundColor: "#fafafa",
    textAlign: 'left',
    borderRadius: '10%',
    '&:hover':{
      backgroundColor: '#f0f0f0',
    }
  },
  mb: {
      marginBottom: 10,
      color: '#333',
  },
  m:{
    margin: '0 auto',
    textAlign: 'center',
    display: 'block'
  },
  p:{
    padding: '50px 0',
  },
}));

const UserCard = props => {
    const classes = useStyles();
    return (
      <Container maxWidth="md" className={classes.p}>
        {props.users.length ? (
        <div className={classes.m}>
          {props.users.map(user => (
          <Card className={classes.cardStyle} key={user.id}>
            <Link style={{textDecoration:'none'}} to={`/user/${user.id}`}>
              <CardContent>
                  <Typography variant="h5" className={classes.mb}>
                    {user.name}
                  </Typography>
                  <Typography className={classes.mb}>
                      {`@${user.username}`}
                  </Typography>
              </CardContent>
            </Link>
          </Card>
          ))}
        </div>
        ) : (
          <div/>
        )}
      </Container>
    );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserCard);