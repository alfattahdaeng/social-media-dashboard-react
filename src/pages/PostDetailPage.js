import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, clearPost, fetchUser, clearUser,
         fetchComments, clearComments } from '../actions';

import CommentList from '../components/CommentList';
import AddCommentForm from '../components/AddCommentForm';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    p:{
        padding: '50px 0',
    },
    mb:{
        marginBottom: '25px',
    },
    link:{
        margin: '0 6px',
        color: '#04a4a4',
    },
    commentWrap:{
      display: 'flex',
      padding: '25px 0',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    add: {
      backgroundColor:'#04a4a4',
      color: '#fff',
      padding: '6px 15px',
      '&:hover':{
        backgroundColor: '#333',
      }
    }
})

class PostPage extends React.Component {
  state = {
    showCommentForm: false
  };
  async componentDidMount() {
    // clear store state appropriately so the page does not render previous state.
    this.props.clearPost();
    this.props.clearComments();
    this.props.clearUser();

    let postId = this.props.location.state
      ? this.props.location.state.id
      : this.props.match.params.postId;

    this.props.fetchPost(postId);
    this.props.fetchComments(postId);
    this.props.fetchUser(this.props.user.id);
  }

  toggleNewComment = () => {
    this.setState(prevState => ({
      showCommentForm: !prevState.showCommentForm
    }));
  };

  render() {
    const { classes } = this.props;

    return (
        <Container maxWidth="md" className={classes.p}>
            <div>
                <Typography variant="h4" gutterBottom>
                {this.props.post.title}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Posted by:
                    <Link
                        className={classes.link}
                        to={{
                        pathname: `/user/${this.props.user.id}`,
                        props: { id: this.props.user.id }
                        }}
                    >
                    {this.props.user.name}
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.mb}>
                    {this.props.post.body}
                </Typography>

                <Divider />

                <div className={classes.commentWrap}>
                  <Typography variant="h5" >
                    Comments:
                  </Typography>
                  <div className="add-comment">
                    <Button onClick={this.toggleNewComment} className={classes.add}>
                      Add Comment
                    </Button>
                  </div>
                </div>
                {this.state.showCommentForm ? <AddCommentForm /> : <div />}

                {this.props.comments.length !== 0 ? (
                <CommentList
                    comment={this.props.comment}
                    comments={this.props.comments}
                    type="comments"
                />
                ) : (
                <div> Loading Data </div>
                )}
            </div>
        </Container>
     
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post,
    comments: state.comments,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => {
      dispatch(fetchPost(postId));
    },
    fetchUser: userId => {
      dispatch(fetchUser(userId));
    },
    fetchComments: postId => {
      dispatch(fetchComments(postId));
    },
    clearPost: () => {
      dispatch(clearPost());
    },
    clearComments: () => {
      dispatch(clearComments());
    },
    clearUser: () => {
      dispatch(clearUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PostPage));
