import "../pages/Hero.css";
import MainVideo from "../assets/video.mp4";
import React from "react";
import Logininfo from "../components/Logininfo";

function Hero() {

  return (
    <div className="hero container text-center col-lg-2">
   
      <video autoPlay loop muted id="video" class="col ">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="slogan">
      <h3 className="slogan-text">Protect Your Identity</h3>
      <h3 className="slogan-text">powered By NFT </h3>
    </div>
      <div className="row body col col-lg-2 ">
        <div className="col-lg-6 ">
     
         <Logininfo/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
