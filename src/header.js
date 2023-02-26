import React from 'react';
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import notarystamp from './notarystamp.png';


const Header = () => {
    const navigation = useNavigate()
    const navigateToHome =()=>{
        navigation('/');
    }
    return(            
        <Navbar id="navigator" expand="lg"> 
            <Navbar.Brand id="brand" >LAURI'S NOTARY SERVICES</Navbar.Brand>
            
            <Nav id="links">
                <Nav.Link id="home" href='/'>HOME</Nav.Link>
                <Nav.Link id="about" href="about">ABOUT</Nav.Link>
                <Nav.Link id="services" href="services">SERVICES</Nav.Link>
                <Nav.Link id="contact" href="contact">CONTACT</Nav.Link>
                <SocialIcon id="facebook" url="https://www.facebook.com/Laurisnotaryservices/"></SocialIcon>
            </Nav>
        
        </Navbar> 
     
    );
}

export default Header;