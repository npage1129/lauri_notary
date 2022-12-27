import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

const Footer = () => {
    return(
        <Navbar  expand="lg"> 
    
        
        <Navbar.Brand id='brand'>LAURI'S NOTARY SERVICES</Navbar.Brand>
        
        <Nav >
        
            <Nav.Link  id="about-footer" href="about">ABOUT</Nav.Link>
            <Nav.Link  id="services-footer" href="services">SERVICES</Nav.Link>
            <Nav.Link id="contact-footer" href="contact">CONTACT</Nav.Link>
      
            </Nav>

        
</Navbar>


    )
}

export default Footer;