import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
