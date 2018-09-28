import React from 'react';
import { Card, Icon, Button, Row } from 'react-materialize';


const posts = () =>{
    return(
        <Card className='small card-container'>
        <Icon> favorite</Icon>
        <Button type= "button" className= "edit-message-btn waves-effect waves-light btn">Editar</Button>
        <Button type="button" className="delete-message-btn delete waves-effect waves-light btn">Borrar</Button> 
        <Row>
        Here will be your comment
        </Row> 

       
           
        </Card>
)
}

export default posts