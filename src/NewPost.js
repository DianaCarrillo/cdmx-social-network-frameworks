import React, {Component} from 'react';
import firebase from 'firebase';
// import React from 'react';
import { Input, Button } from 'react-materialize';

class NewPost extends Component {
    constructor() {
        
        super();
       
        this.state = {
         message:""
    }
    this.handleMessage = this.handleMessage.bind(this); // las funciones permanecen a ese componente App; es para que no pierda el scope
        this.sentMessage =this.sentMessage.bind(this);
}

  handleMessage (e){
    this.setState =({message: e.target.value});
    
  }

  sentMessage (){
    firebase.database().ref('new').push();
    const postNew = firebase.database().ref('new').push();
    const key = postNew.getKey();
    firebase.database().ref(`new/${key}`).set({ 
        message: this.state.message,
        keyPost: key
        });
  }

  render() {
      return(
    <div>
      <Input  onChange={this.handleMessage} name="post"/>
      <Button className="button-pubish" onClick = {this.sentMessage} >Publicar</Button>
    </div>
    )
  }
}
 export default NewPost;
