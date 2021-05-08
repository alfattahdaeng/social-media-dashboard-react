import axios from 'axios'

import {
    FETCH_USERS,FETCH_USER,FETCH_POSTS,FETCH_POST,FETCH_ALBUMS,FETCH_ALBUM,
    CLEAR_USERS,CLEAR_USER,CLEAR_POSTS,CLEAR_ALBUMS
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
  
export const fetchPostSuccess = post => {
    return {
      type: FETCH_POST,
      post: post
    }
};