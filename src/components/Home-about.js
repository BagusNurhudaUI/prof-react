import React from "react";

export default function About(){
    return (
        <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            In here, you will find more information about me, my skills, and what i do mostly in my recent life especially about technology
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get in touch with me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hi!! My name is
                <strong>Bagus Nurhuda</strong>
                and I'm an <strong> undergraduate student </strong> from <strong>University of Indonesia</strong>. Currently studying about <strong>Computer Engineering</strong> 
                and anything about <strong>software development</strong>
              </p>
              <p className="about__content-details-para">
                I'm interested in <strong>Web Development</strong> including fronted and backend. Sometimes I also learning about <strong> Cloud Computing</strong>
                and I'm ready to be parts of several companies. Feel free to
                <strong>contact</strong> me here.
              </p>
            </div>
            <a href="#contact" className="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            >
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">ReactJS</div>
              <div className="skills__skill">NodeJS</div>
              <div className="skills__skill">GIT</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">Google CLoud</div>
              <div className="skills__skill">C</div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}