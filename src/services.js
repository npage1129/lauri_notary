import React from 'react';
import './services.css';
import Header from './header';
import pen from './services.png';

const Services = () => {

    return(
        <div>
            <div id="serviceColumn"> 
            <h1><Header/></h1>
        <div>
            <h2 id = "servicesTitle">Services</h2>

        </div>

        <div style={{textAlign: 'center', position: 'relative', top: 0, left: 0}}>
            <img id="penPic" src={pen}></img>
                <div style={{position: 'absolute'}}class="box">Box 1</div>
                <div style={{position: 'absolute'}}class="box">Box 2</div>
                <div style={{position: 'absolute'}}class="box">Box 3</div>
        </div>
        </div>
        </div>
    )

}

export default Services;