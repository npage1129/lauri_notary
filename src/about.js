import React from 'react';
import Header from './header';
import './about.css';
import lj from './lj .jpg'
const About = () => {
  return(
        <div>
          <Header/>
        <div id = 'heading'>
        <h1 style ={{color: '#dd7973', fontSize: '50px'}} > About Me </h1>
        <h3 > Hi, I'm Lauri </h3>
        <div>
            <img id="lj" src = {lj}></img>
        <div id="verbiage">
        <h5 id="professional-heading">SEASONED PROFESSIONAL</h5>
        <p id="season-body">I am a mobile notary public serving the Southwest Florida area specializing in all types of loans. I deliver services to businesses, homes, health care facilities, etc.
            I am also a licensed Title Agent with many years of experience in loan closings as well as over 30 years in business development.
            I am a Certified Signing Agent with the National Notary Association with knowledge in all forms of real estate transactions and loans.</p>
        </div>
  
        <div id="verbiage2">
        {/* <hr style={{marginLeft:'auto', marginRight:'auto', width: '75%', height: '20'}}/> */}
        <h5 id="experienced-heading">EXPERIENCED EXCELLENCE</h5>
        <p id = "experience-part1">
       I am detail-oriented and customer service-driven. I pride myself on being very organized, friendly, and dedicated. I understand that every client is unique, and I ensure that each job will be tailored to their individual needs.
      <br></br>
      <br></br>
        I’m currently serving the following areas: Bonita Springs, Naples, Estero, Fort Myers, Cape Coral, Marco Island, and all surrounding areas. However, if you’re outside of these areas, feel free to reach out and we’ll see what we can do for you!
        <br></br>
        <br></br>
        I look forward to working with you! Cheers to a smooth closing! 
        </p>
        <div className="banner" style ={{color: 'black'}}>
     
         <div className = "bannerHead">Stamping New Changes</div>
      
        <div className ="bannerBody"> I have a passion for this crazy real estate business and I love working with people and assisting them with their life-changing adventures. 

​<br></br><br></br>

My favorite part has always been sitting at the table during the final closings, so I decided to open up my own mobile notary company, which gives me the opportunity to work with everyone and help them with the last parts of their closing. 

 <br></br><br></br>
I have focused mainly on all types of loan closings, including refinances and reverse mortgages.  I also love working with sellers during the final steps of their process as well.​
         </div>   
      

        </div>
        </div>
        </div>
        </div>
        </div>

    )
}

export default About;