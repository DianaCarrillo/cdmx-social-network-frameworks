import React from 'react';

// elementos de materialize
import { Button } from 'react-materialize';

const profile = ({logOutFunction, user}) => {
    return ( 
    <div>
        <img width = "100" src = {user.photoURL} alt = {user.displayName}/> 
        <p> Hola {user.displayName}! </p> 
        <Button onClick = {logOutFunction}> Salir </Button> 
    </div>
    )
}

export default profile;