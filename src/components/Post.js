import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions/index';

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Edit, Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  editModal: {
    '& .MuiDialog-paperWidthSm':{
      minWidth: 600,
      maxWidth: 900,
    }
  },
});


class Post extends React.Component {
  state = {
    editModalOpen: false,
    deleteModalOpen: false,
    editedTitle: '',
    editedBody: ''
  };

  onEditOpen = () => this.setState({ editModalOpen: true });
  onEditClose = () => this.setState({ editModalOpen: false });
  onDeleteOpen = () => this.setState({ deleteModalOpen: true });
  onDeleteClose = () => this.setState({ deleteModalOpen: false });

  onDeleteClick = e => {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
    this.setState({ deleteModalOpen: false });
  };

  onEditClick = e => {
    e.preventDefault();
    this.props.editPost(
      this.props.post.id,
      this.state.editedTitle,
      this.state.editedBody
    );
    this.setState({ editModalOpen: false });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h5" gutterBottom>
        <Link
         style={{textDecoration:'none'}}
         to={{
            pathname: `/posts/${this.props.post.id}`,
            state: { id: this.props.post.id, userId: this.props.post.userId }
          }}
        >
          {this.props.post.title}
        </Link>
        </Typography>
        <Typography component="p">
            {this.props.post.body}
        </Typography>
        <div className="actionPost">
          <Button onClick={this.onEditOpen} size="small">
              <Edit />
          </Button>
          <Dialog 
            open={this.state.editModalOpen}
            onClose={this.onEditClose}
            aria-labelledby="form-dialog-title"
            className={classes.editModal}
            >
            <DialogTitle id="form-dialog-title">{"Edit Post"}</DialogTitle>
            <DialogContent>
              <TextField 
                autoFocus
                margin="normal"
                name="editedTitle"
                label="Title"
                type="text"
                fullWidth
                placeholder="Edit Post Title"
                defaultValue={this.props.post.title}
                value={this.state.value}
                onChange={this.onInputChange}
              />
              <TextField
                margin="normal"
                name="editedBody"
                label="Body"
                type="text"
                fullWidth
                multiline
                placeholder="Edit Post Body"
                defaultValue={this.props.post.body}
                value={this.state.value}
                onChange={this.onInputChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onEditClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.onEditClick} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <Button onClick={this.onDeleteOpen} size="small">
              <Delete  />
          </Button>
          <Dialog
            open={this.state.deleteModalOpen}
            onClose={this.onDeleteClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Delete Post"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this post?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onDeleteClose} color="primary">
                No
              </Button>
              <Button onClick={this.onDeleteClick} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    },
    editPost: (id, editedTitle, editedBody) => {
      dispatch(editPost(id, editedTitle, editedBody));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Post));
