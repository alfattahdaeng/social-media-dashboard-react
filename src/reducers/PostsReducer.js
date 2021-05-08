import {FETCH_POSTS, CLEAR_POSTS} from '../actions/types';
  
export default function postsReducer(state = [], action) {
    switch (action.type) {
      case FETCH_POSTS:
        return action.posts
    case CLEAR_POSTS:
        return [];
      default:
        return state;
    }
}
  