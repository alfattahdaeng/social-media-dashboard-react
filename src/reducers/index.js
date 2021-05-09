import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer'
import UserReducer from './UserReducer'
import PostsReducer from './PostsReducer'
import PostReducer from './PostReducer'
import AlbumsReducer from './AlbumsReducer'
import AlbumReducer from './AlbumReducer'
import PhotosReducer from './PhotosReducer';
import CommentsReducer from './CommentsReducer';


const rootReducer = combineReducers({
    users: UsersReducer,
    user: UserReducer,
    posts: PostsReducer,
    post: PostReducer,
    album: AlbumReducer,
    albums: AlbumsReducer,
    photos: PhotosReducer,
    comments: CommentsReducer,
});

export default rootReducer;