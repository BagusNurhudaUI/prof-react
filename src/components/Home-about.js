import React from "react";

export default function About(){
    return (
        <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            In here, you will find more information about me, my skills, and what i do mostly in my recent life especially about technology
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get in touch with me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Hi!! My name is
                <strong>Bagus Nurhuda</strong>
                and I'm an <strong> undergraduate student </strong> from <strong>University of Indonesia</strong>. Currently studying about <strong>Computer Engineering</strong> 
                and anything about <strong>software development</strong>
              </p>
              <p class="about__content-details-para">
                I'm interested in <strong>Web Development</strong> including fronted and backend. Sometimes I also learning about <strong> Cloud Computing</strong>
                and I'm ready to be parts of several companies. Feel free to
                <strong>contact</strong> me here.
              </p>
            </div>
            <a href="#contact" class="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            >
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">ReactJS</div>
              <div class="skills__skill">NodeJS</div>
              <div class="skills__skill">GIT</div>
              <div class="skills__skill">SQL</div>
              <div class="skills__skill">Google CLoud</div>
              <div class="skills__skill">C</div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}