import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles (theme => ({
  cardStyle: {
    margin: '15px 15px',
    padding: '20px',
    width: 150,
    height: 150,
    backgroundColor: "#fafafa",
    textAlign: 'center',
    '&:hover':{
      backgroundColor: '#f0f0f0',
    }
  },
}));

const Album = props => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cardStyle}>
        <Link
          style={{textDecoration:'none'}}
          to={{
            pathname: `/user/${props.album.userId}/albums/${props.album.id}`,
            state: { id: props.album.id, userId: props.album.userId }
          }}
        >
          <CardContent>
            <Typography variant="body2" gutterBottom>
              {props.album.title}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default Album;
