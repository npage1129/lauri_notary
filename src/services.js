import React from 'react';
import './services.css';
import Header from './header';
import pen from './services.png';

const Services = () => {

    return(
        <div className="contain">
            <div id="serviceColumn"> 
            <h1><Header/></h1>
        <div>
            <h2 id = "servicesTitle">Services</h2>

        </div>

        <div>
            <img id="penPic" src={pen}></img>
                <div style={{marginLeft: "100px"}}className="box">Box 1</div>
                <div style={{marginLeft: "100px"}}className="box">Box 2</div>
                <div style={{marginLeft: "100px"}}className="box">Box 3</div>
        </div>
        </div>
        </div>
    )

}

export default Services;