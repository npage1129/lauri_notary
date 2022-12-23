import React from 'react';
import {useNavigate} from 'react-router-dom';
import './home.css';
import Header from './header';
import notarystamp from './notarystamp.png';
import spill from './inkSpill.jpeg';
import fadepic from './fadepic.jpeg'

const Home = ()=>{
    const url = 'https://www.facebook.com/Laurisnotaryservices/';
    return(
        <div>
        <div id='column'>
            <h1><Header/></h1>
            <h1 id='snippet'>Lauri Page is a South Florida-based<br></br> Mobile Notary, specializing in all loan types. </h1>
            <h2 id="subHeader">She is currently available for hire</h2>
            <button id="touch">Get in Touch</button>
            </div>
            <div id="column">
            <img id="spilll" src={spill}></img>
            <img id="lauri" src={fadepic}></img>
            <img id="stamp" src={notarystamp}></img>

            </div>
        </div>
    )
}

export default Home;