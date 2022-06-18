import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return <>
        <header>
            <Navbar fixed='top' bg="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="todos-logo"
                            src="../logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        TODO APPS
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    </>
}
export default Header;