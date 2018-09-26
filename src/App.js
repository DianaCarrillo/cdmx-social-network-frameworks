// dependencias
import React, { Component } from 'react';
import firebase from 'firebase';
import Navbar from './Navbar';
import Form from './Form'
import Profile from './Profile'

// assets // fichero app
import './App.css';

class App extends Component {
  // vamos a colocar el estado en una función que trae las clases de JS que se llama constructor()
  constructor() {
  // tenemos que llamar a super si estamos heredando de otra clase. La clase App está heredando de componente para que llame al constructor de componente
    super();
    // el usuario va a esar vacío en primera instancia
    this.state = {
      user: null
    };
    // todas las funciones que estén utilizando this., de esta manera le estamos indicando cuál es la referencia al objeto this que queremos que utilice

    this.handleAuthGoogle = this.handleAuthGoogle.bind(this); // las funciones permanecen a ese componente App; es para que no pierda el scope
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
    this.handleAuthFacebook= this.handleAuthFacebook.bind(this);

  }

  // método de lifecycle de react, lo que hace es dispararse una vez el componente ha sido renderizado en el DOM
  componentWillMount () {
    // devuelve un objeto usuario. Cada vez que nos loggeemos o salgamos, el objeto va a tener el usuario o va a salir null
  firebase.auth().onAuthStateChanged(user =>{
    // esto se dispara después del pop up y va a setear el estado
  // modifica el estado. Si la clave y el valor son el mismo, se peude poner solo una vez. Es lo mismo que user: user
    this.setState({ user });
   })
  }
  
  handleAuthGoogle () {
    console.log('hola')
  // nos va a crear un proveedor de google para utilizar
    const provider = new firebase.auth.GoogleAuthProvider();
 // devuelve una promesa con el objeto del usuario y queremos su email y que nos indique en la consola que ha iniciado sesión
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log (`Error ${error.code}: ${error.message}`))
  }

  handleAuthFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log (`Error ${error.code}: ${error.message}`))
  }
  handleLogout ( ){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log (`Error ${error.code}: ${error.message}`))
  }

renderLoginButton () {
//  preguntamos si el usuario está logueado; es distino de null:
if (this.state.user){
  return (
  <div>
   <Profile logOutFunction={this.handleLogout} user={this.state.user}/>
  </div>
    )
  }else{
    return(
      <Form authGoogle={this.handleAuthGoogle} authFacebook ={this.handleAuthFacebook}/>
       )
     }
   }
  
    render() {
      return (
        <div className="App">
          <Navbar />
          <div className="App-intro">{ this.renderLoginButton() }</div>
        </div>
      );
    }
   } 
  
  export default App;