import React from "react";
import logoFooter from '../image/logo-footer.jpg'
import '../styles/Footer.css'


export default function Footer(){
    return (
        <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bagusnurhuda/">
                <img
                  class="main-footer__icon"
                  src={require('../assets/png/linkedin-ico.png')}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/BagusNurhudaUI">
                <img
                  class="main-footer__icon"
                  src={require('../assets/png/github-ico.png')}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCjjZ7G9Miy074O_q2xu6ZnA">
                <img
                  class="main-footer__icon"
                  src={require('../assets/png/yt-ico.png')}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://instagram.com/bagusnurhuda">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src={require('../assets/png/insta-ico.png')}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Bagus Nurhuda</h4>
            <p class="main-footer__short-desc">
              A learner that focused on developing ownself, sometimes gonna good or better. 
            </p>
          </div>
        </div>

        
        <div class="main-footer__lower">
          &copy; Copyright 2022. Made by
          <a rel="noreferrer" target="_blank" href="https://instagram.com/bagusnurhuda"
            >Bagus Nurhuda</a
          >
        </div>
      </div>
    </footer>
    );
}