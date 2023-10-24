import React from 'react';
import { Link } from 'react-router-dom';
import "./Options.css";
import videoSrc from "../video/World.mp4";

function Option() {
  return (
    <div className="MainMenu">
    <div className="content">
      <div className="LOGO">
        <h1 to="/" className="LOGO">
          RICH BANK <i className="typo" />
        </h1>
 
      
        </div>
        
      
      <div className="container">
        <video src={videoSrc} autoPlay loop muted className="video-bg" />

        
          <a className="Tranfer" href='' >
            <span className="pay">Tranfer & Payment </span>
          </a>
    

    
          <a className="send" >
            <span className="Receive" >Send & Receive Money</span>
          </a>
      

        
          <a className="Prepaid"  href=''>
            <span className="Lotto"> Prepaid/Lotto</span>
          </a>
        

        <a className="Statement" >
          <span className="Print">Print Statement </span>
        </a>

        <Link to="/MainMenu">
          <a className="CAncel" href="/">
            <span className="CAncel-1">Cancel </span>
          </a>
        </Link>
        <Link to="/MainMenu">
          <a className="CELLPHONE" >
            <span className="Banking">Manage Pin & Limit </span>
          </a>
        </Link>

       
        <Link to="/">
          <a className="Manage" >
            <span className="Limite"> Cellbanking/Online Banking </span>
          </a>
        </Link>
      </div>
    </div>
  </div>
);
}
  


export default Option;
