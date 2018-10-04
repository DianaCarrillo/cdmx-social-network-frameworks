import React, { Component } from 'react';
import firebase from 'firebase';
import { Input, Button } from 'react-materialize';
// import Posts from 'Posts'

class NewPost extends Component {
    constructor() {
        super();
        this.state = {
         message:''
    }
}

  handleMessage = (e) =>{
    // console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
    // console.log(e.target.name)
  }

  sentMessage = () =>{
    const currentUser = firebase.auth().currentUser;
    const newPost = firebase.database().ref('new').push();
    const key = newPost.getKey();
    firebase.database().ref(`new/${key}`).set({
        creatorName:currentUser.displayName,
        UserEmail: currentUser.email, 
        creator: currentUser.uid,
        message: this.state.messageInput,
        keyPost: key
        })
          this.setState({messageInput: ''})        
  }

  render() {
      return(
    <div>
      <Input  name="messageInput" placeholder="¿Qué tip saludable compartirás hoy?" onChange={this.handleMessage} />
      <Button className="button-pubish" onClick={this.sentMessage} >Publicar</Button>
    </div>
    )
  }
}
 export default NewPost;
