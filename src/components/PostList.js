import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Post from './Post';


const useStyles = makeStyles (theme => ({
  item: {
      marginBottom: 25,
      paddingBottom: 25,
      borderBottom: '1px solid #333',
      '& a': {
        color: '#04a4a4',
      }
  },
}));

const PostList = props => {
  const classes = useStyles();
  const list = props.posts;
  return (
    <div className={classes.list}>
      {list.map(post => {
        return (
          <div className={classes.item} key={`${post.id}`}>
            <Post post={post} user={props.user} />
          </div>
        );
      })}
    </div>
  );
};



export default PostList;
