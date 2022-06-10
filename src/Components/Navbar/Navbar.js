import React from 'react';
import "./Navbar.css"
import Resume from "../../Data/Maged's Resume.pdf"
// Skills Nav Code
// <button className='Nav__Button' value={"Skills"} onClick={onClickHandler}>Skills</button>
const Navbar = (props) => {
     const onMenuChange = (event) =>{
          event.preventDefault();
          props.changeDisplay(event.target.value);
     }

     const onClickHandler = (event) =>{
          window.open(Resume, '_blank', 'noopener,noreferrer');
     }

     return (
          <div className='Navbar'>
               <div className='Buttons__Wrapper'>
                    <button className='Nav__Button' value={"Home"} onClick={onMenuChange}>Home</button>
                    <button className='Nav__Button' value={"Projects"} onClick={onMenuChange}>Projects</button>
                    <button className='Nav__Button' value={"Resume"} onClick={onClickHandler}>Resume</button>
               </div>
          </div>
     );

};

export default Navbar;