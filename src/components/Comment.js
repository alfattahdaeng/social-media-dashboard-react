import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../actions';


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

class Comment extends React.Component {
  state = {
    deleteModalOpen: false,
    editModalOpen: false,
    editedName: '',
    editedEmail: '',
    editedBody: ''
  };

  onDeleteOpen = () => this.setState({ deleteModalOpen: true });
  onDeleteClose = () => this.setState({ deleteModalOpen: false });
  onEditOpen = () => this.setState({ editModalOpen: true });
  onEditClose = () => this.setState({ editModalOpen: false });

  onDeleteClick = e => {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
    this.setState({ deleteModalOpen: false });
  };

  onEditClick = e => {
    e.preventDefault();
    this.props.editComment(
      this.props.comment.id,
      this.state.editedName,
      this.state.editedEmail,
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
                {this.props.comment.name}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Comment by: {this.props.comment.email}
            </Typography>
            <Typography component="p">
                {this.props.comment.body}
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
                    <DialogTitle id="form-dialog-title">{"Edit Comment"}</DialogTitle>
                    <DialogContent>
                    <TextField 
                        autoFocus
                        margin="normal"
                        name="editedName"
                        label="Title"
                        type="text"
                        fullWidth
                        placeholder="Edit Comment Name"
                        defaultValue={this.props.comment.name}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        required
                    />
                      <TextField 
                        margin="normal"
                        name="editedEmail"
                        label="Email"
                        type="text"
                        fullWidth
                        placeholder="Edit Comment Email"
                        defaultValue={this.props.comment.email}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        required
                    />
                    <TextField
                        margin="normal"
                        name="editedBody"
                        label="Body"
                        type="text"
                        fullWidth
                        multiline
                        placeholder="Edit Comment Email"
                        defaultValue={this.props.comment.body}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        required
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
                    <DialogTitle id="alert-dialog-title">{"Delete Comment"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this comment?
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
    deleteComment: id => {
      dispatch(deleteComment(id));
    },
    editComment: (id, editedName, editedEmail, editedBody) => {
      dispatch(editComment(id, editedName, editedEmail, editedBody));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Comment));
