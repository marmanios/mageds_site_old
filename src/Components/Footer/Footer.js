import "./Footer.css"
import LinkedINLogo from '../../Data/Pictures/icons8-linkedin-64.png';
import InstaLogo from '../../Data/Pictures/icons8-instagram-64.png';
import MailLogo from '../../Data/Pictures/icons8-mail-64.png';
import { useState } from "react";
import EmailPopUp from "../EmailPopUp/EmailPopUp";

const Footer = () => {

     const [timeOut, setTimeOut] = useState(false);
     
     const onClickHandler = (event) =>{
          event.preventDefault()
          navigator.clipboard.writeText("maged.armanios@yahoo.com")
          setTimeOut(true);
          setTimeout(()=> {setTimeOut(false)},2000);
          
     }

     return (
          <div className="Footer">
               {timeOut && <EmailPopUp/>}
               <div className="Socials__Message">
                    Reach Out!
               </div>
               <div className="Socials__Buttons_Container">
                    <div className="Socials__Button">
                         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maged-armanios/">
                              <img alt="LinkedIN-Logo" src={LinkedINLogo} />
                         </a>

                    </div>
                    <div className="Socials__Button">
                         <a target="_blank" rel="noreferrer" href="https://www.instagram.com/maged_armanios/">
                              <img alt="Insta-Logo" src={InstaLogo} />
                         </a>


                    </div>
                    <div className="Socials__Button">
                         <a href="www.google.com" rel="noreferrer" onClick={onClickHandler}>
                              <img alt="Email-Logo" target="_blank" src={MailLogo} />
                         </a>
                         
                    </div>
               </div>


          </div>
     );
};
export default Footer;