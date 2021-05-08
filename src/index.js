import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import "./index.css";
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
     <BrowserRouter>
        <App />
     </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);

