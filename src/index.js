import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Search from './components/Search';
import Results from './components/Results';
import { BrowserRouter } from 'react-router-dom'

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));
// registerServiceWorker();
