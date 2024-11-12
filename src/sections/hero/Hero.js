import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
    
      <div className="hero" id="hero">
      
        <div className="container ">
        <div className="cover-all-hero">
        <h2 className="hero-h2">
            Welcome to our <br />
            <span className="text-uppercase">coffee Shop</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br />
            but the majority have suffered alteration in some form, by injected
            humour,{" "}
          </p>
          <button className="btn btn-light">Learn More</button>
        </div>
     
          
        
        </div>
      </div>
 
    </>
  );
};

export default Hero;
