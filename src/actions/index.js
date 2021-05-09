import axios from 'axios'

import {
    FETCH_USERS,FETCH_USER,FETCH_POSTS,FETCH_POST,FETCH_ALBUMS,FETCH_ALBUM,FETCH_COMMENTS,
    FETCH_PHOTOS,ADD_POST,ADD_COMMENT,EDIT_POST,EDIT_COMMENT,DELETE_POST,DELETE_COMMENT,
    CLEAR_USERS,CLEAR_USER,CLEAR_POSTS,CLEAR_POST,CLEAR_ALBUMS,CLEAR_ALBUM,CLEAR_PHOTOS,CLEAR_COMMENTS,
} from './types'

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => dispatch => {
    axios
      .get(`${apiUrl}/users`)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
};

export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS,
      users: users
    };
};

export const clearUsers = () => {
    return {
      type: CLEAR_USERS
    }
};

export const fetchUser = id => dispatch => {
  axios
    .get(`${apiUrl}/users/${id}`)
    .then(response => {
      dispatch(fetchUserSuccess(response.data));
    })
    .catch(error => {
      throw error;
    })
};

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER,
    user: user
  }
};

export const clearUser = () => {
    return {
      type: CLEAR_USER
    }
};
  
export const fetchAlbums = userId => dispatch => {
    axios
      .get(`${apiUrl}/albums?userId=${userId}`)
      .then(response => {
        dispatch(fetchAlbumsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      })
};
  
export const fetchAlbumsSuccess = albums => {
    return {
      type: FETCH_ALBUMS,
      albums: albums
    }
};

export const clearAlbums = () => {
    return {
      type: CLEAR_ALBUMS
    }
};

export const fetchAlbum = id => dispatch => {
    axios
      .get(`${apiUrl}/albums/${id}`)
      .then(response => {
        dispatch(fetchAlbumSuccess(response.data));
      })
      .catch(error => {
        throw error;
      })
};
  
export const fetchAlbumSuccess = album => {
    return {
      type: FETCH_ALBUM,
      album: album
    }
};

export const clearAlbum = () => {
  return {
    type: CLEAR_ALBUM
  }
}


export const fetchPosts = userId => dispatch => {
    axios
      .get(`${apiUrl}/posts?userId=${userId}`)
      .then(response => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
};
  
export const fetchPostsSuccess = posts => {
    return {
      type: FETCH_POSTS,
      posts: posts
    }
};

export const clearPosts = () => {
    return {
      type: CLEAR_POSTS
    }
};

export const addPost = (title, body) => dispatch => {
  axios
    .post(`${apiUrl}/posts`, { title, body })
    .then(response => {
      dispatch(addPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const addPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  };
};

export const deletePost = id => dispatch => {
  axios
    .delete(`${apiUrl}/posts/${id}`)
    .then(response => {
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      throw error;
    });
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id: id
    }
  };
};

export const editPost = (id, title, body) => dispatch => {
  axios
    .put(`${apiUrl}/posts/${id}`, { title, body })
    .then(response => {
      dispatch(editPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const editPostSuccess = data => {
  return {
    type: EDIT_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  };
};

export const fetchPost = id => dispatch => {
    axios
      .get(`${apiUrl}/posts/${id}`)
      .then(response => {
        dispatch(fetchPostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      })
};

export const clearPost = () => {
  return {
    type: CLEAR_POST
  }
}

export const fetchPostSuccess = post => {
    return {
      type: FETCH_POST,
      post: post
    }
};

export const fetchComments = postId => dispatch => {
  axios
    .get(`${apiUrl}/comments?postId=${postId}`)
    .then(response => {
      dispatch(fetchCommentsSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const fetchCommentsSuccess = comments => {
  return {
    type: FETCH_COMMENTS,
    comments: comments
  };
};

export const clearComments = () => {
  return {
    type: CLEAR_COMMENTS
  }
}

export const addComment = (name, email, body) => dispatch => {
  axios
    .post(`${apiUrl}/comments`, { name, email, body })
    .then(response => {
      dispatch(addCommentSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const addCommentSuccess = data => {
  return {
    type: ADD_COMMENT,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      body: data.body
    }
  };
};

export const deleteComment = id => dispatch => {
  axios
    .delete(`${apiUrl}/comments/${id}`)
    .then(response => {
      dispatch(deleteCommentSuccess(id));
    })
    .catch(error => {
      throw error;
    });
};

export const deleteCommentSuccess = id => {
  return {
    type: DELETE_COMMENT,
    payload: {
      id: id
    }
  };
};

export const editComment = (id, name, email, body) => dispatch => {
  axios
    .put(`${apiUrl}/posts/${id}`, { name, email, body })
    .then(response => {
      dispatch(editCommentSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const editCommentSuccess = data => {
  return {
    type: EDIT_COMMENT,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      body: data.body
    }
  };
};

export const fetchPhotos = albumId => dispatch => {
  axios
    .get(`${apiUrl}/photos?albumId=${albumId}`)
    .then(response => {
      dispatch(fetchPhotosSuccess(response.data));
    })
    .catch(error => {
      throw error;
    })
}

export const fetchPhotosSuccess = photos => {
  return {
    type: FETCH_PHOTOS,
    photos: photos
  }
}

export const clearPhotos = () => {
  return {
    type: CLEAR_PHOTOS
  }
}
