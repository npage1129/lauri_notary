import React from 'react';
import './services.css';
import Header from './header';
import Notary from './Fees List.jpg';

const Services = () => {

    return(
        <div className="contain">
            <div id="serviceColumn"> 
            <h1><Header/></h1>
        <div>
            <h2 id = "servicesTitle">Services</h2>
         

        </div>
        
        <div>
            <img id="fees" src={Notary}></img>
        </div>
        <div style={{backgroundColor: 'white'}}>
            <h1><Header/></h1>
            </div>
        </div>
        </div>
    )

}

export default Services;