import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import "./index.css";
import App from './App';
import rootReducer from './reducers';
import theme from "./theme";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.hydrate(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
     <BrowserRouter>
        <App />
     </BrowserRouter>
   </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

