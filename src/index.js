import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCfn6b_XlLJBPuG6_6oWCUR4RxqA39JzSs",
    authDomain: "greener-react.firebaseapp.com",
    databaseURL: "https://greener-react.firebaseio.com",
    projectId: "greener-react",
    storageBucket: "greener-react.appspot.com",
    messagingSenderId: "674937726579"
  });

ReactDOM.render(<App />, document.getElementById('root'));
