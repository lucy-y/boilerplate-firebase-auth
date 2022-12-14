import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './component/Hello';
import Clock from './component/Clock';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello name="Lulu"/>
    <Hello name="Lala"/>
    <Clock />
  </React.StrictMode>
);

reportWebVitals();
