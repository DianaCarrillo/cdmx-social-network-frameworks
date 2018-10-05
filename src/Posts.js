import React, { Component } from 'react'
import firebase from 'firebase';
import { Card, Button } from 'react-materialize'

class Posts extends Component{
    constructor() {
        super();
        this.state ={
              posts:[]
        }
    }

  componentDidMount() {
      firebase.database().ref('new').on('value', snapshot=>{
        const posts = []
          snapshot.forEach(shot=>{
              const snapshotVal = shot.val()
              posts.push(snapshotVal);
          })
          this.setState({
              posts
          })
      })
}

render(){
// console.log(this.state.posts)
    return(
             <div className="post-container">
                {this.state.posts.map(post=>{
                    // console.log(post);
                return(
                    <Card  className={post.keyPost}>
                        <div className="post-content"  >
                        <img src={post.photoUrl} width="7%" alt="" className="circle img-user"/>
                            <p className="user-name-post">{post.creatorName}</p>
                            <p id={post.keyPost} className="post-message">{post.message}</p>
                      </div>
                      <div className ="card-action card-footer">
                      
                            <Button type= "button" data-key={post.keyPost} className= "edit-message-btn"> Editar </Button>
                            <Button type="button"  data-key={post.keyPost} className="delete-message-btn"> Borrar </Button>
                            <p id ={post.keyPost} className="favorite-counter right"></p><i data-key={post.keyPost} className="small material-icons right favoriteCounter">favorite</i>
                      </div> 
                  </Card>
                        )
                      })
                    }
              </div>
    )
  }
}


export default Posts;

        {/* <div className="container post-cont">
                    <div>
                       <img className= "circle photoProfile" width = "100" src = {post.photoURL} alt = {post.displayName}/> 
                       <p className="userPost"> <strong>{post.UserEmail}</strong>:</p>
                       <p id={post.keyPost} className="textMessage"> ${post.message}</p>
                       <div className ="card-action ">
                       <Button type= "button" data-key={post.keyPost} className= "edit-message-btn"> Editar </Button>
                      <Button type="button"  data-key={post.keyPost} className="delete-message-btn"> Borrar </Button>
                      <p id ={post.keyPost} className="favorite-counter right"></p><i data-key={post.keyPost} className="small material-icons right favoriteCounter">favorite</i>
                    </div> */}
                    {/* <div className={post.keyPost}>
                    {post.message}
                    </div> */}
                // )})}