// Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

// ficheros, assets
import './index.css';
import App from './App';

firebase.initializeApp({
    apiKey: "AIzaSyCfn6b_XlLJBPuG6_6oWCUR4RxqA39JzSs",
    authDomain: "greener-react.firebaseapp.com",
    databaseURL: "https://greener-react.firebaseio.com",
    projectId: "greener-react",
    storageBucket: "greener-react.appspot.com",
    messagingSenderId: "674937726579"
  });


// ReactDOM, llama al método render. Le indicamos qué componente queremos renderizar en este caso es (App), que está importado arriba
// y el elemento donde lo queremos renderizar en el html, es decir (root)
ReactDOM.render(<App />, document.getElementById('root'));
