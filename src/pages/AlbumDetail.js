import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum, clearAlbum, fetchUser, clearUser,
        fetchPhotos, clearPhotos } from '../actions';

import PhotoList from '../components/PhotoList';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'

import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    p:{
        padding: '50px 0',
    },
    photoWrap:{
        margin: '30px 0'
    }
})

class AlbumDetail extends React.Component {
  componentDidMount() {
    // clear store state appropriately so the page does not render previous state.
    this.props.clearAlbum();
    this.props.clearPhotos();
    this.props.clearUser();

    let albumId = this.props.location.state
      ? this.props.location.state.id
      : this.props.match.params.albumId;

    this.props.fetchAlbum(albumId);
    this.props.fetchPhotos(albumId);
    this.props.fetchUser(this.props.album.userId);
  }

  render() {
    const { classes } = this.props;

    return (
        <Container maxWidth="md" className={classes.p}>
            <div>
                <Typography variant="h6" gutterBottom>
                    Album Title: <b>{this.props.album.title}</b>
                </Typography>

                <Divider />
                <div className={classes.photoWrap}>
                    <Typography variant="h6" gutterBottom>
                        Photos:
                    </Typography>
                    {this.props.photos.length !== 0 ? (
                        <PhotoList photos={this.props.photos} />
                    ) : (
                        <div> Loading Data </div>
                    )}
                </div>
            </div>
        </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album,
    user: state.user,
    photos: state.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: albumId => {
      dispatch(fetchAlbum(albumId));
    },
    fetchUser: userId => {
      dispatch(fetchUser(userId));
    },
    fetchPhotos: albumId => {
      dispatch(fetchPhotos(albumId));
    },
    clearAlbum: () => {
      dispatch(clearAlbum());
    },
    clearPhotos: () => {
      dispatch(clearPhotos());
    },
    clearUser: () => {
      dispatch(clearUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlbumDetail));
