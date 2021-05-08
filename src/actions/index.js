import axios from 'axios'

import {
    FETCH_USERS
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