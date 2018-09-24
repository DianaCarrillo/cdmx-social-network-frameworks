import React from 'react';
// elementos de materialize
import { Row, Input, Button } from 'react-materialize';
const form = ({authGoogle}) => {
    return ( 
        <form>
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
                <Input type="password" label="password" m={10} s={10} />
            </Row>
            <Row>
                <Input  type="email" label="Email" m={10} s={10} />
            </Row>
        </form>
    )
}

export default form;