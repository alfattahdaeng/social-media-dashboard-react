import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography'

const UserDetail = props => {
  return (
    <div>
        <Typography variant="h4" gutterBottom>
            Profile
        </Typography>
        <Typography component="p">
            {`Name: ${props.user.name}`}
        </Typography>
        <Typography component="p">
            {`Username: @${props.user.username}`}
        </Typography>
        <Typography component="p">
            {`Email: ${props.user.email}`}
        </Typography>
        <Typography component="p">
            {`Phone: ${props.user.phone}`}
        </Typography>
        <Typography component="p">
            {`Website: ${props.user.website}`}
        </Typography>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserDetail);
