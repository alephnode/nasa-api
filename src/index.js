import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './assets/stylesheets/styles.scss';

ReactDOM.render(
	<App />, // render our App component
	document.getElementById('root') // and mount it to our #root element
);
