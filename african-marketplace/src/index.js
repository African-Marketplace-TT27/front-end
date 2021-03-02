import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Redux and middleware
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// components
import reducer from './reducers';
import App from './App';

// styling
import './index.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// Redux Store
const store = (createStore(reducer, applyMiddleware(thunk, logger)))


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store = {store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
