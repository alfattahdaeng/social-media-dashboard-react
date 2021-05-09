import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  formWrap: {
    border: '1px solid #333',
    padding: '20px',
    margin: '30px 0 50px',

    '& button':{
      display: 'block',
      margin: '30px auto 15px',
      padding: '10px 50px',
      backgroundColor: '#04a4a4',
      color: '#fff',
      '&:hover':{
        backgroundColor: '#333',
      }
    }
  },
});

class AddPostForm extends React.Component {
  state = {
    title: '',
    body: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state.title, this.state.body);
    this.setState( {
      title: '',
      body: ''
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <form  className={classes.formWrap} autoComplete="off" onSubmit={this.onFormSubmit}>
        <TextField
          id="outlined-title-input"
          label="Post Title"
          name= "title"
          type="text"
          placeholder="Enter Post Title"
          autoComplete="off"
          required
          value={this.state.title}
          onChange={this.onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-body-input"
          label="Post Body"
          name="body"
          type="text"
          placeholder="Enter Post Body"
          autoComplete="off"
          required
          value={this.state.body}
          onChange={this.onInputChange}
          fullWidth
          multiline
          margin="normal"
        />
        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, body) => {
      dispatch(addPost(title, body));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(AddPostForm));
