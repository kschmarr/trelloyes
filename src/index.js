import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './store.js';
import App from './App.js';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root')
)
