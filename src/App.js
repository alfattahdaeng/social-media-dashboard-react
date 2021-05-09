import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import PostDetailPage from './pages/PostDetailPage';
import AlbumDetail from './pages/AlbumDetail';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/user/:userId" component={UserProfile} />
        <Route exact path="/posts/:postId" component={PostDetailPage} />
        <Route exact path="/albums/:albumId" component={AlbumDetail} />
      </Switch>
    </div>
  );
}

export default App;
