import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <div id="titler">
                <Navbar.Brand href="/">Lauri's Notary Services</Navbar.Brand>
            </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link id="about" href="about">About</Nav.Link>
                <Nav.Link id="services" href="services">Services</Nav.Link>
                <Nav.Link id="contact" href="contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
    );
}

export default Header;