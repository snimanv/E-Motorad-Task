import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

console.log("Index.js is running"); // Debugging log

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();