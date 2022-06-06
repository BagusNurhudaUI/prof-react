import React from "react";
import '../styles/Footer.css'


export default function Footer(){
    return (
        <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bagusnurhuda/">
                <img
                  className="main-footer__icon"
                  src={require('../assets/png/linkedin-ico.png')}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/BagusNurhudaUI">
                <img
                  className="main-footer__icon"
                  src={require('../assets/png/github-ico.png')}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCjjZ7G9Miy074O_q2xu6ZnA">
                <img
                  className="main-footer__icon"
                  src={require('../assets/png/yt-ico.png')}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://instagram.com/bagusnurhuda">
                <img
                  className="main-footer__icon main-footer__icon--mr-none"
                  src={require('../assets/png/insta-ico.png')}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Bagus Nurhuda</h4>
            <p className="main-footer__short-desc">
              A learner that focused on developing ownself, sometimes gonna good or better. 
            </p>
          </div>
        </div>

        
        <div className="main-footer__lower">
          &copy; Copyright 2022. Made by
          <a rel="noreferrer" target="_blank" href="https://instagram.com/bagusnurhuda"
            >Bagus Nurhuda</a
          >
        </div>
      </div>
    </footer>
    );
}