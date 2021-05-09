import React from 'react';
import PhotoCard from './PhotoCard';

import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";


const useStyles = makeStyles (theme => ({
    cardStyle: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
    },
    m:{
      margin: '20px auto',
      textAlign: 'center',
    },
}));

const PhotoList = props => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.cardStyle, classes.m)}>
      {props.photos.map(photo => {
        return <PhotoCard photo={photo} key={photo.id} user={props.user} />;
      })}
    </div>
  );
};

export default PhotoList;
