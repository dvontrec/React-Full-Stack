// Imports materilize into application
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

//renders the app to the root div
ReactDom.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);
