import React from 'react';
// elementos de materialize
import { Row, Input, Button } from 'react-materialize';


const form = ({authGoogle, authFacebook, logIn, handleInput}) => {
    return ( 
        <form className="Form">
            <Row>
                <Button type="button" waves='light' className="Google-button" onClick={authGoogle} > Continuar con Google </Button>
            </Row>
            <Row>
                <Button type="button" waves='light' className="Facebook-button" onClick={authFacebook} > Continuar con Facebook </Button>
            </Row>
            <Row>
                <Button type ="button" waves='light' className="inicio-button" onClick={logIn}> Registrar </Button>
            </Row>
            <Row>
                 <Input className="email-input"  type="email" label="Email" name="email" s={12} onChange={handleInput} />
            </Row>
            <Row>
                 <Input className="password-input" type="password" label="password" name="password" onChange={handleInput} s={12} />
            </Row>
        </form>
    )
    }



export default form;