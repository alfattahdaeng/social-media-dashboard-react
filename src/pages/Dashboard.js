import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

import UserCard from '../components/UserCard';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {

    return (
        <React.Fragment>
        <div>
          <UserCard/>
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