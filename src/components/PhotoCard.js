import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles (theme => ({
  card: {
    width: 200,
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  media: {
      objectFit: 'cover',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    padding: '30px',
  },
}));

const PhotoCard = props => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.card} onClick={handleOpen}>
        <CardMedia
          component="img"
          className={classes.media}
          height="150"
          image={props.photo.thumbnailUrl}
        />
        <CardContent style={{ flex: 1 }}>
          <Typography style={{ flex: 1 }} component="p">
            {props.photo.title}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography component="h6">
              Photo Name: {props.photo.title}
            </Typography>
            <Typography component="p">
              Photo URL: {props.photo.thumbnailUrl}
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PhotoCard;
