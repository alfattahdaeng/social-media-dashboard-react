import { FETCH_ALBUM } from '../actions/types';

export default function albumReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ALBUM:
      return action.album
    default:
      return state;
  }
}
