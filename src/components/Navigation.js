import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
    return <>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="./logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    TODO APPS
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
}
export default Navigation;