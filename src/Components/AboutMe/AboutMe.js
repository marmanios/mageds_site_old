import React from 'react';
import "./AboutMe.css";
import picOfMe from "../../Data/Pictures/Me.jpg";
const AboutMe = () => {
     return (
          <div className='About__Me__Wrapper'>
               <div className='Name__And__Title'>
                    <h1>Maged Armanios</h1>
                    <h2>Upcoming Software Engineer</h2>
               </div>
               <div className='About__Me'>
                    <p>
                         Hello and thanks for coming to my website! I am Maged Armanios.
                         I am currently a third year student at McMaster University and am aiming to become a software developer in the future.
                    </p>
                    <img className='pictureOfMe' alt="head shot of me" src={picOfMe}></img>

                    </div>
               <div className='About__Me'>
                    <p>
                         I'm currently well versed in MERN Stack and other technologies like MONGOdb, SQLLite, Python Scripting, and Java.     
                    </p>
               </div>
               <div className='About__Me'>
                    <p>
                         My goals for the future are to increase my knowledge of backend technologies, learn the basics of A.I, 
                         and increase my skills in UX and UI design (as you can tell its not my strong suit)
                    </p>
                    </div>
               <div className='About__Me'>
                    <p>
                         Please feel free to reach out to me through any of the links in the footer :)
                    </p>
               </div>
               <br></br>
               <br></br>
               <span></span>
          </div>
     );

};

export default AboutMe;