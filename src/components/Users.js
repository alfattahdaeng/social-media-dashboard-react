import React from 'react';
import axios from 'axios';
import { withStyles } from "@material-ui/core";

import UserTableList from './UserTableList';

const useStyles = theme => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  margin: {
    margin: "20px 0 40px",
  },
});

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
  }

  render() {
    const { classes } = this.props;

    return (
        <React.Fragment>
        <div>
          <h1>User List</h1>
        </div>
        <div className={classes.margin}>
          <UserTableList users={this.state.users}/>
        </div>
        </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Users);