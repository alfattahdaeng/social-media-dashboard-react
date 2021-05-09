import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Comment from './Comment';


const useStyles = makeStyles (theme => ({
  list:{
    padding: 60,
    backgroundColor: '#fafafa',
  },

    item: {
        marginBottom: 25,
        padding: 25,
        border: '1px solid #333',
        '& button': {
          margin: '20px 0 0 20px',
          padding: '0px',
          color: '#333',
          minWidth: '3px',
          backgroundColor: 'transparent',
          '&:hover':{
            color: '#04a4a4',
            backgroundColor: 'transparent',
          }
        },
        '& .actionPost':{
          textAlign: 'right',
        },
    },
}));

const CommentList = props => {
const classes = useStyles();
  const list = props.comments;
  return (
    <div className={classes.list}>
      {list ? (
        list.map(comment => {
          return (
            <div className={classes.item} key={comment.id}>
              <Comment comment={comment} />
            </div>
          );
        })
      ) : (
        <div>Loading Data</div>
      )}
    </div>
  );
};

export default CommentList;
