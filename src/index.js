import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/reset.css';
import './assets/css/index.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ax from './components/ax';
import popalert from './components/popalert';
import './components/vwcheck';

window.ax=ax;
window.popalert=popalert;

// vwcheck();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
