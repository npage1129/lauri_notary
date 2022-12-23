import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import notarystamp from './notarystamp.png';



const Header = () => {

    return(            
        <Navbar id="nav" expand="lg"> 
            <Navbar.Brand>LAURI'S NOTARY SERVICES</Navbar.Brand>
            <Nav>
                <Nav.Link id="about" href="about">ABOUT</Nav.Link>
                <Nav.Link id="services" href="services">SERVICES</Nav.Link>
                <Nav.Link id="contact" href="contact">CONTACT</Nav.Link>
            </Nav>
        
        </Navbar> 
     
    );
}

export default Header;