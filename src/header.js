import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from './icon.png'



const Header = () => {

    return(            
        <Navbar id="navigator" expand="lg"> 
            <Navbar.Brand id="brand">LAURI'S NOTARY SERVICES</Navbar.Brand>
            <Nav id="links">
              
                <Nav.Link id="about" href="about">ABOUT</Nav.Link>
                <Nav.Link id="services" href="services">SERVICES</Nav.Link>
                <Nav.Link id="contact" href="contact">CONTACT</Nav.Link>
            </Nav>
        
        </Navbar> 
     
    );
}

export default Header;