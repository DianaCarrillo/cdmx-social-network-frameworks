// Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

// ficheros, assets
import './index.css';
import App from './App';

firebase.initializeApp({
  apiKey: 'AIzaSyCbW5lXCLbbrY6EkFROvAukVs8herq8G-Y',
  authDomain: 'social-network-5b9ef.firebaseapp.com',
  databaseURL: 'https://social-network-5b9ef.firebaseio.com',
  projectId: 'social-network-5b9ef',
  storageBucket: '',
  messagingSenderId: '1074635944561'
  });


  
// ReactDOM, llama al método render. Le indicamos qué componente queremos renderizar en este caso es (App), que está importado arriba
// y el elemento donde lo queremos renderizar en el html, es decir (root)
ReactDOM.render(<App />, document.getElementById('root'));

//variables de entorno archivo .env 