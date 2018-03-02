import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../public/reset.css';
import '.poppins.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
