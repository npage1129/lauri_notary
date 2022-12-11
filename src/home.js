import React from 'react';
import {useNavigate} from 'react-router-dom';
import './home.css';
import Header from './header';
import img2 from './img2.jpeg';
import notarystamp from './notarystamp.png';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Home = ()=>{
    const url = 'https://www.facebook.com/Laurisnotaryservices/';
    return(
        <div>
        <div>
            <h1><Header/></h1>
        </div>
        <div className="parent">
            <img id="signing" src={img2}></img>
            <img id="stamp" src={notarystamp}></img>
            </div>
        <div className='facebook'>
        <Container className='follow1'>
            <h1 id="follow">FOLLOW ME ON SOCIAL MEDIA</h1>
            <button id='fabutton' type="button" onClick={() => window.open(url, '_blank')}><FontAwesomeIcon icon={faFacebook} /></button> 
        </Container>
        </div>
        </div>
    )
}

export default Home;