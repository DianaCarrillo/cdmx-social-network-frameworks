import React, { Component } from 'react'
import firebase from 'firebase';
import { Card, Button, Form } from 'react-materialize'

class Posts extends Component{
    constructor() {
        super();
        this.state ={
              posts:[]
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
    handleRemove = (e) =>{
       const confirm = window.confirm('¿Estás seguro de eliminar éste mensaje?')
        if (confirm === true){
            firebase.database().ref('new').child(e.target.dataset.key).remove();
       } else {
            return;
       }

    }
    handleEdit = () =>{
       alert('I will edit LOL') 
    }


    render(){
    // console.log(this.state.posts)
        return(
                <div className="post-container">
                    {this.state.posts.map(post=>{
                        // console.log(post);
                    return(
                        <Card  className="card-content" className={post.keyPost} >
                            {/* <Form>
                                <input />
                                <Button>Guardar</Button>                                
                                <Button>Cancelar</Button>
                            </Form> */}
                            
                            <div className="post-content"  >
                            <img src={post.photoUrl} width="10%" alt="" className="circle img-user"/>
                                <p className="user-name-post">{post.creatorName}</p>
                                <p id={post.keyPost} className="post-message">{post.message}</p>
                        </div>
                        <div className ="card-action card-footer">
                        
                                <Button type= "button" onClick={this.handleEdit} data-key={post.keyPost} className= "edit-message-btn"> Editar </Button>
                                <Button type="button" onClick={this.handleRemove}  data-key={post.keyPost} className="delete-message-btn"> Borrar </Button>
                                <p id ={post.keyPost} className="favorite-counter right"></p><i data-key={post.keyPost} className="small material-icons right favoriteCounter">favorite</i>
                        </div> 
                    </Card>
                            )
                        }).reverse()
                        }
                </div>
        )
    }
    }


export default Posts;
