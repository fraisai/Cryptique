/**
 * Implemented navigation with react-router
 *  BrowserRouter (index.js) => Routes -> Route (App.jsx) => Link (components)
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styles from './scss/application.scss';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
