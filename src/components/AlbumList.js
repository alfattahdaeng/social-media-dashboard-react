import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Album from './Album';

const useStyles = makeStyles (theme => ({
  item: {
      display: 'inline-block',
      '& a': {
        color: '#04a4a4',
        display: 'block',
        height: '100%',
      }
  },
}));

const AlbumList = props => {
  const classes = useStyles();
  const list = props.albums;
  return (
    <div className={classes.list}>
      {list.map(album => {
        return (
          <div className={classes.item} key={album.id}>
            <Album album={album} user={props.user} />
          </div>
        );
      })}
    </div>
  );
};

export default AlbumList;
