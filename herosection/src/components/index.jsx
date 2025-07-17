import React from "react";
import "./hero.css";
import bgImage from "../assets/bg.png";
import arrowImage from "../assets/arrow.png";

export function HeroSection() {
  return (
    <section className="section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <span className="welcome">WELCOME TO ALLSEE</span>

        
        <h1 className="heading-row">
          <span className="heading-left"><span className="heading-premium">Premium</span><br /><span className="heading-solutions">Solutions</span></span>
          <div className="description-row">
          <p className="description">
            Elevate your brand experience with Allsee's high-quality textiles — from custom clothes and uniforms to premium hotel and hospital linen. Trusted by industry leaders for comfort, durability, and timeless style.
          </p>
          <div className="hero-arrow">
                <img src={arrowImage} alt="arrow"/>
        </div>
        </div>
          <span className="heading-right"><span className="heading-textile">Textile</span><br /><span className="heading-for-every">for every Industry</span></span>
        </h1>

        
        
        
      </div>
      <div className="strip-container">
  <div className="strip">
    <span> New Collection 2025</span>
    <span># Get Up to 50% off</span>
    <span># Textiles</span>
    <span># Clothing</span>
    <span># Best Fashion Deals</span>
    <span># Shop Now</span>
  </div>
</div>

    </section>
  );
}
