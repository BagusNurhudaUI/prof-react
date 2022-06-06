import React, { useState, useEffect } from "react";
import axios from 'axios'
import '../styles/Home.css';


function Home() {
    
    return (
      <section className="home-hero">
      <div className="home-hero__content">
        <div className="home-hero__content1">
        <h1 className="heading-primary">Hello, My name is Bagus Nurhuda
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">
            An undergraduate student from 
            <strong> University of Indonesia </strong> 
            majoring in <strong> Computer Enginering .</strong>
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="#projects" className="btn btn--bg">Projects</a>
        </div>
        </div>
        <div className="home-hero__content2">
          <div className="home-hero__content_image">
            <img src={require('../assets/png/prof.png')} alt="gambar-main" width={300}/>
          </div>
        </div>
      </div>
      
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
      
    )
}

export default Home;