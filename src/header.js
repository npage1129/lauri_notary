import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const Header = () => {

    return(
        <Navbar id="nav" bg="light" expand="lg">
            
        <Container>
        <Stack gap={2}>
                <Navbar.Brand href="/">Lauri's Notary Services</Navbar.Brand>
             
            <Nav>
                <Nav.Link id="about" href="about">About</Nav.Link>
                <Nav.Link id="services" href="services">Services</Nav.Link>
                <Nav.Link id="contact" href="contact">Contact</Nav.Link>
            </Nav>
            </Stack>
        </Container>
        
        </Navbar>  
    );
}

export default Header;