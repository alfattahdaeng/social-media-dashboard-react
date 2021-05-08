import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchPosts, fetchAlbums, 
        clearUser, clearPosts, clearAlbums } from '../actions/index';

import UserDetail from '../components/UserDetail';
import DetailTabs from '../components/DetailTabs';

import Container from '@material-ui/core/Container';

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    p:{
        padding: '50px 0',
    },
})

class UserProfile extends React.Component {

  async componentDidMount() {
    // clear store state appropriately so the page does not render previous state.
    this.props.clearUser();
    this.props.clearPosts();
    this.props.clearAlbums();

    let userId = this.props.location.state
      ? this.props.location.state.id
      : this.props.match.params.userId;

    this.props.fetchUser(userId);
    this.props.fetchPosts(userId);
    this.props.fetchAlbums(userId);
  }
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="md" className={classes.p}>
        <UserDetail />
        <DetailTabs />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    posts: state.posts,
    albums: state.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => {
      dispatch(fetchUser(userId));
    },
    fetchPosts: userId => {
      dispatch(fetchPosts(userId));
    },
    fetchAlbums: userId => {
      dispatch(fetchAlbums(userId));
    },
    clearUser: () => {
      dispatch(clearUser());
    },
    clearPosts: () => {
      dispatch(clearPosts());
    },
    clearAlbums: () => {
      dispatch(clearAlbums());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserProfile));
