import React from 'react';
// elementos de materialize
import { Row, Input, Button } from 'react-materialize';
const form = ({authGoogle}) => {
    return ( 
        <form className="Form">
            <Row>
                <Button type="button" waves='light' className="Google-button" onClick={authGoogle} > Continuar con Google </Button>
            </Row>
            <Row>
                <Button type="button" waves='light' className="Facebook-button" > Continuar con Facebook </Button>
            </Row>
            <Row>
                <Button type ="button" waves='light' className="inicio-button" > Iniciar sesión </Button>
            </Row>
            <Row>
                 <Input  type="email" label="Email" s={12} />
            </Row>
            <Row>
                 <Input type="password" label="password" s={12} />
            </Row>
        </form>
    )
}

export default form;