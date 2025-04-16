import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Conditionally import the correct App component
const App = process.env.REACT_APP_IS_AI_SITE === 'true' 
  ? require('./ai/App').default 
  : require('./App').default;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();