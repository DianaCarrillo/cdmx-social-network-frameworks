import React, { Component } from 'react';
// elementos de materialize
import { Row, Input, Button, Modal } from 'react-materialize';
import firebase from 'firebase';

class Login extends Component {
    constructor(props) {
      console.log(props)
        super(props);
     
        this.state = {
                email: '',
                password:''
        }
        
        this.login =this.login.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
  }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
          console.log(`el usuario ${u} ha iniciado sesión`)
        })
          .catch((error) => {
        alert(error);
      })
    }

    signUp(e) {
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        alert(`el usuario ${u} se ha registado`)
      })
      .catch((error)=>{
        alert(error);
      })

    }



    render (){
      return(
        <form className="Form">
           <Row>
              <Button type="button" waves='light' className="Google-button" onClick={this.props.authGoogle}> Continuar con Google </Button>
            </Row>
            <Row>
              <Button type="button" waves='light' className="Facebook-button" onClick={this.props.authFacebook} > Continuar con Facebook </Button>
            </Row>

            <Modal header='Iniciar sesión' trigger={<Button className="inicio-button">Iniciar sesión</Button>}>
            <Row>
              <Input className="email-input"  type="email" label="Email" name="email" onChange={this.handleChange} s={12}  />
            </Row>
            <Row>
              <Input className="password-input" type="password" label="password" name="password" onChange={this.handleChange} s={12} />
            </Row>
            <Row>
              <Button type ="button" waves='light' className="inicio-button" onClick={this.signUp}>GO!</Button>
            </Row>
           </Modal>
           <Row>           
           <p className="register-instruction">¿No te has registrado?</p>
           </Row>

            <Modal header='Crear cuenta' trigger={<Button className="registro-button">Registro</Button>}>
            <Row>
              <Input className="email-input"  type="email" label="Email" name="email" onChange={this.handleChange} s={12}  />
            </Row>
            <Row>
              <Input className="password-input" type="password" label="password" name="password" onChange={this.handleChange} s={12} />
            </Row>
            <Row>
              <Button type ="button" waves='light' className="registro-button" onClick={this.signUp}>Registro</Button>
            </Row>
           </Modal>
               
         </form>
        )
      }
 }

export default Login;