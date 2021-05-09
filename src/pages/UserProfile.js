import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchPosts, fetchAlbums, 
        clearUser, clearPosts, clearAlbums } from '../actions/index';

import UserDetail from '../components/UserDetail';
import DetailTabs from '../components/DetailTabs';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

import AddPostForm from '../components/AddPostForm';

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    p:{
        padding: '50px 0',
    },
    addPost:{
      margin: '20px 0 0',
      textAlign: 'right',
    },
    add: {
      backgroundColor:'#04a4a4',
      color: '#fff',
      padding: '10px 25px',
      '&:hover':{
        backgroundColor: '#333',
      }
    }
})

class UserProfile extends React.Component {
  state = {
    showPostForm: false
  };
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

  toggleNewPost = () => {
    this.setState(prevState => ({
      showPostForm: !prevState.showPostForm
    }));
  };
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="md" className={classes.p}>
        <UserDetail />
        <div className={classes.addPost}>
            <Button onClick={this.toggleNewPost} className={classes.add}>
              Add Post
            </Button>
        </div>
        {this.state.showPostForm ? <AddPostForm /> : <div />}

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
