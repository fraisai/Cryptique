import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import styles from './style.scss';

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));