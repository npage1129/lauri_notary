import React from 'react';
import {useNavigate} from 'react-router-dom';
import './home.css';
import Header from './header';
import notarystamp from './notarystamp.png';
import spill from './inkSpill.jpeg';
import fadepic from './fadepic.jpeg';
import pen from './pen.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ()=>{
    const url = 'https://www.facebook.com/Laurisnotaryservices/';
    const navigate=useNavigate();
    const navigateToContact =()=>{
        navigate('/contact');
    }
    return(
        <div>
        <div id='column'>
            <h1><Header/></h1>
            <h1 id='snippet'>Lauri Page is a South West Florida-based<br></br> Mobile Notary, specializing in all loan types. </h1>
            <h2 id="subHeader">Available for all of your notary needs</h2>
            <button onClick={navigateToContact}id="touch">Get in Touch</button>
            </div>
            <div id="column" style={{ height: "1500px" }}>
            <img id="pen" src={pen}></img>
            <div id ="me-section">
           <img id="lauri" src={fadepic}></img>
            <h1 id="meHeader"> Putting My Experience to Work</h1>
            <p id="about-me"> 
Hi! I'm Lauri and I'm a mobile notary public located in Southwest Florida. I've worked in business development for over 30 years and I've been in the title business for 6 of these, 5 of which I have been a licensed title agent.
I've completed well-over 1000 closings, and during the process I fell in love with helping people make their dreams become a reality.
I have a passion for this crazy real estate business and I love working with people and assisting them with their life-changing adventures.My favorite part has always been sitting at the table during the final closings,
so I decided to open up my own mobile notary company, which gives me the opportunity to work with everyone. I have focused mainly on all types of loan closings, including refinances and reverse mortgages. I also love working with sellers during the final steps of their process as well. 
            I pride myself on being very organized, friendly, and dedicated. 
            I understand that every client is unique, and I ensure that each job will be tailored to their individual needs.
            </p>
            </div>
            </div>
        
            </div>
          
    )
}

export default Home;