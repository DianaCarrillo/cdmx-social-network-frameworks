
import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log (`Error ${error.code}: ${error.message}`))
  }

  renderLoginButton () {
// si el usuario está logueado haga algo
if (this.state.user){
  return (
  <div>
    <img src= {this.state.user.photoUrl} alt= {this.state.user.displayName} />
    <p>Hola { this.state.user.displayName}!</p>
  </div>
  );
}else{
  <button onClick={this.handleAuth}>Login con Google</button>
// si no está, que haga otra cosa
     }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Greener</h1>
        </header>
        <p className="App-intro">
        { this.renderLoginButton() }
        </p>
      </div>
    );
  }
 } 

export default App;
