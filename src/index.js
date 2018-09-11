import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Navigation from './components/layout/Navigation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
