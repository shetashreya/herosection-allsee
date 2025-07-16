import React from "react";
import "./hero.css";
import bgImage from "../images/bg.png";
// import arrowImage from "../images/Group 73.png";

export function HeroSection() {
  return (
    <section className="section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <span className="welcome">WELCOME TO ALLSEE</span>

        {/* h1 ma first text isha aama me css karyu bov kharab che e deit karj*/}
        <h1 className="heading-row">
          <span className="heading-left"><span className="heading-premium">Premium</span><br /><span className="heading-solutions">Solutions</span></span>
          <span className="heading-right"><span className="heading-textile">Textile</span><br /><span className="heading-for-every">for every Industry</span></span>
        </h1>

        
        {/* have react ma kai chage no karti khali css chane karj */}
        <div className="description-row">
          <p className="description">
            Elevate your brand experience with Allsee's high-quality textiles — from custom clothes and uniforms to premium hotel and hospital linen. Trusted by industry leaders for comfort, durability, and timeless style.
          </p>


          <div className="line-circle">
            {/* <div className="horizontal-line"></div>
            <div className="circle">
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
