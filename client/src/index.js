import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App'

const store = createStore(() => [], {}, applyMiddleware());

//renders the app to the root div
ReactDom.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);
