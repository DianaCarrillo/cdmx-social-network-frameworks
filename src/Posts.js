import React, { Component } from 'react'
import firebase from 'firebase';
import { Card, Button, Modal, Input } from 'react-materialize'

class Posts extends Component{
    constructor() {
        super();
        this.state ={
              posts:[],
              postEdited : '',
              message:''

        }
    }
// apenas el componente se haya montado, agrégale todos esos datos de la base de firebase
  componentDidMount() {
      firebase.database().ref('new').on('value', snapshot=>{
        const posts = []
          snapshot.forEach(shot=>{
              const snapshotVal = shot.val()
              posts.push(snapshotVal);
          })
          this.setState({ posts })
      })
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
        photoUrl: currentUser.photoURL,
        UserEmail: currentUser.email, 
        creator: currentUser.uid,
        message: this.state.messageInput,
        keyPost: key
        })
          this.setState({messageInput: ''})        
  }

    handleRemove = (e) => {
       const confirm = window.confirm('¿Estás seguro de eliminar éste mensaje?')
        if (confirm === true){
            firebase.database().ref('new').child(e.target.dataset.key).remove();
       } else {
            return;
       }

    }
    handleEdit = (key, e) => {
        firebase.database().ref('new').child(key).update({
            message : this.state.postEdited
        })
    }
    
    render(){
    // console.log(this.state.posts)
        return(
            <div>
            <Modal trigger={<Button className="publicar-algo-button">Nueva publicación</Button>}>
              <Input  name="messageInput" placeholder="¿Qué tip saludable compartirás hoy?" onChange={this.handleMessage} />
              <Button className="button-pubish" onClick={this.sentMessage} >Publicar</Button>
            </Modal>
                <div className="post-container">
                    {this.state.posts.map(post=>{
                        // console.log(post);
                    return(
                        <Card  className="card-content" className={post.keyPost} >                            
                            <div className="post-content"  >
                            <img src={post.photoUrl} width="10%" alt="" className="circle img-user"/>
                                <p className="user-name-post">{post.creatorName}</p>
                                <p id={post.keyPost} className="post-message">{post.message}</p>
                        </div>
                        <div className ="card-action card-footer">
                        <Button type="button" onClick={this.handleRemove}  data-key={post.keyPost} className="delete-message-btn"> Borrar </Button>

                              <Modal trigger ={<Button type= "button"  className= "edit-message-btn">  Editar </Button>}>
                                <textarea>{post.message}</textarea> 
                                <Button className="button-pubish" onClick = {()=>this.handleEdit(post.keyPost)}>Guardar</Button>
                              </Modal>

                                <p id ={post.keyPost} className="favorite-counter right"></p><i data-key={post.keyPost} className="small material-icons right favoriteCounter">favorite</i>
                        </div> 
                    </Card>
                            )
                        }).reverse()
                        }
                </div>
          </div>

        )
    }
    }


export default Posts;
