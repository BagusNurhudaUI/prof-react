import React from 'react';
import '../styles/Home.css';
import fotoProfile from '../image/foto-profile.png'
import Instafeed from "C:/Users/Bagus/Documents/Bangkit 2022/Belajar/project-react-1/portofolio-web/node_modules/instafeed.js/dist/instafeed.min.js"

var feed = new Instafeed({
  limit :6,
  clientId : "639245593",
  accessToken: 'IGQVJVbWtSX1Rwa0lvUWVESG02MUp0SFoxaDFvZAGJPM2NWZAnRCNThHLUk1eHVLU0c0ZAmJ6S05LTWhaSXZAfYU1OSHNQN2NXbWZAXYXlQR3RVQXRET0NCeDdWUW1zZA1dBTTE5M0g0R0NoekpMV3F0a19GMgZDZD'
});
console.log(feed.run());


function Home() {
    return (
      <div className='hero'>
        <div className='home-1' >
        <div className='desc-profile'>
              <h1 className='name'>Hi, I'm Bagus</h1>
              <h2 className='univ'>Undergraduate Student At University of Indonesia</h2>
              <p>I design and code beautifully simple things, and I love what I do.</p>
              <div className='resume'>
                <a href='https://www.linkedin.com/in/bagusnurhuda/'>My Resume</a>
              </div>
        </div>
          <div className='foto-prof'>
            <img src={fotoProfile} alt="foto profile"width={400}/>
          </div>

        </div>
      <div id='instafeed' className='insta'>
            {feed.run()}
      </div>
        
      </div>

    )
}

export default Home;