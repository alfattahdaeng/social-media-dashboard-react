import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

import UserTableList from '../components/UserTableList';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {

    return (
        <React.Fragment>
        <div>
          <h1>User List</h1>
        </div>
        <div>
          <UserTableList/>
        </div>
        </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(null,mapDispatchToProps)(Dashboard);