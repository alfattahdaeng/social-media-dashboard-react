import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  formWrap: {
    border: '1px solid #333',
    padding: '20px',
    margin: '0 0 50px',

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

class AddCommentForm extends React.Component {
  state = {
    name: '',
    email: '',
    body: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.name, this.state.email, this.state.body);
    this.setState({
      name: '',
      email: '',
      body: ''
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form  className={classes.formWrap} autoComplete="off" onSubmit={this.onFormSubmit}>
        <TextField
          id="outlined-name-input"
          label="Comment Name"
          name= "name"
          type="text"
          placeholder="Enter Comment Name"
          autoComplete="off"
          required
          value={this.state.name}
          onChange={this.onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-email-input"
          label="Comment Email"
          name= "email"
          type="text"
          placeholder="Enter Comment Email"
          autoComplete="off"
          required
          value={this.state.email}
          onChange={this.onInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-body-input"
          label="Comment Body"
          name="body"
          type="text"
          placeholder="Enter Comment Body"
          autoComplete="off"
          required
          value={this.state.body}
          onChange={this.onInputChange}
          fullWidth
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
    addComment: (name, email, body) => {
      dispatch(addComment(name, email, body));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(AddCommentForm));
