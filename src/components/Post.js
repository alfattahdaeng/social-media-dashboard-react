import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

class Post extends React.Component {
  render() {
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
      </div>
    );
  }
}

export default Post;
