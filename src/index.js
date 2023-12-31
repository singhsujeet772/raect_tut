import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hideshow from './Hideshow.js';
import Formdata from './Formdata.js';
import Profile from './Profile.js';
import Login from './Login.js';
import Appclass from './Appclass.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appclass />
    <Login />
    <Profile />
    <Formdata />
    <Hideshow />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
