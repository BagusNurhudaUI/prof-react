import React from 'react';
import '../styles/Home.css';
import fotoProfile from '../image/foto-profile.png'
import Instafeed from "C:/Users/Bagus/Documents/Bangkit 2022/Belajar/project-react-1/portofolio-web/node_modules/instafeed.js/dist/instafeed.min.js"

var feed = new Instafeed({
  accessToken: 'IGQVJYOWZAyTGZAaYmxiX1JtV0s2dkJRbTlhMDNVSzNDbm1MQ1JqQU1jV2NjSUlncFAteTNsWkFDMEZA5TklvenliQlpzN0stRDhCZAEFzWmdhcnQ5VW1LTVpnTHFJVU5UTUE2X3VoTHBIOHhPTm9wZATRKUAZDZD'
});


function Home() {
    return (
      <div>
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
            <img src={fotoProfile} alt="foto profile"width={380}/>
          </div>

        </div>
      <div id='instafeed' className='insta'>
        This is my galery
            {feed.run()}
      </div>
        

<h1>IME (Ikatan Mahasiswa Elektro) merupakan organisasi kemahasiswaan di tingkat Departemen Teknik Elektro yang bertujuan untuk melayani serta memfasilitasi masyarakat elektro, baik dalam bidang akademik maupun nonakademik serta sebagai sarana penyalur aspirasi dan pemersatu mahasiswa dari semua jurusan di dalam Departemen Teknik Elektro UI</h1>

     <h1>IME (Ikatan Mahasiswa Elektro) merupakan organisasi kemahasiswaan di tingkat Departemen Teknik Elektro yang bertujuan untuk melayani serta memfasilitasi masyarakat elektro, baik dalam bidang akademik maupun nonakademik serta sebagai sarana penyalur aspirasi dan pemersatu mahasiswa dari semua jurusan di dalam Departemen Teknik Elektro UI</h1>   
<h1>IME (Ikatan Mahasiswa Elektro) merupakan organisasi kemahasiswaan di tingkat Departemen Teknik Elektro yang bertujuan untuk melayani serta memfasilitasi masyarakat elektro, baik dalam bidang akademik maupun nonakademik serta sebagai sarana penyalur aspirasi dan pemersatu mahasiswa dari semua jurusan di dalam Departemen Teknik Elektro UI</h1>

<h1>IME (Ikatan Mahasiswa Elektro) merupakan organisasi kemahasiswaan di tingkat Departemen Teknik Elektro yang bertujuan untuk melayani serta memfasilitasi masyarakat elektro, baik dalam bidang akademik maupun nonakademik serta sebagai sarana penyalur aspirasi dan pemersatu mahasiswa dari semua jurusan di dalam Departemen Teknik Elektro UI</h1>
      </div>

    )
}

export default Home;