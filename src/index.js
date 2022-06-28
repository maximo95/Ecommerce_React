import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpeEpIdOR-FfrXe80SFvifVDO_YaYRzZ0",
  authDomain: "project-1780528557902881397.firebaseapp.com",
  projectId: "project-1780528557902881397",
  storageBucket: "project-1780528557902881397.appspot.com",
  messagingSenderId: "743263889832",
  appId: "1:743263889832:web:d52a12eb1e6357c366959d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
