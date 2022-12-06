import React from 'react';
import './home.css';
import Header from './header';
import img2 from './img2.jpeg';
import notarystamp from './notarystamp.png'

const Home = ()=>{

    return(
        <div>
        <div>
            <h1><Header/></h1>
        </div>
        <div className="parent">
            <img id="signing" src={img2}></img>
            <img id="stamp" src={notarystamp}></img>
           
            </div>
        </div>
    )
}

export default Home;