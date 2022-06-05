import React, { useState, useEffect } from "react";
import MainPage from "../components/Home-hero"
import About from "../components/Home-about"
import Projects from "../components/Home-project"
import Gallery from "../components/Home-gallery"
import Contact from "../components/Home-contact"
export default function Home(){
    return (
        <div>
            <MainPage />
            <About />
            <Projects />
            <Gallery /> 
            <Contact />
        </div>
        
    )
}