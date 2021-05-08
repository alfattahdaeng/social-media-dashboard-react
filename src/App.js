import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/user/:userId" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
