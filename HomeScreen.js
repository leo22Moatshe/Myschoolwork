import React, { useState } from 'react';
import './HomeScreen.css'; 
import { Link } from 'react-router-dom';
import videoSrc from "./video/World.mp4";



function HomeScreen() {
  const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);

  return (
    <>
    <div className="video-container">
        <video src={videoSrc} autoPlay loop muted className="video-bg" />
        
        <div className="content">
          <div className="Logo">
            <h1 to="/" className="navbar-logo">
              Rich Bank <i className="fab fa-typo3" />
            </h1>
          </div>
          <div className="container" onClick={handleClick}>
            <Link to="/FingerPrint">
            <a class="bn31" href="/"><span class="bn31span">Finger Print</span></a>
            </Link>
          </div>
          <div className="">
            <Link to="/LostCard">
            <a class="bn32" href="/"><span class="bn32span">lost/stolen card</span></a>
            </Link>
          </div>
          <div className="navbar-SideBUTTON">
            <Link to="/Cardless">
            <a class="bn33" href="/"><span class="bn33span">CardLess</span></a>
            </Link>
          </div>
        </div>
</div>
    </>
  );
}

export default HomeScreen;
