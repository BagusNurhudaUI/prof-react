import React from 'react';
import './Home.css';
import fotoProfile from '../../image/foto-profile.png'
import Instafeed from "C:/Users/Bagus/Documents/Bangkit 2022/Belajar/project-react-1/portofolio-web/node_modules/instafeed.js/dist/instafeed.min.js"

var feed = new Instafeed({
  accessToken: 'IGQVJYOWZAyTGZAaYmxiX1JtV0s2dkJRbTlhMDNVSzNDbm1MQ1JqQU1jV2NjSUlncFAteTNsWkFDMEZA5TklvenliQlpzN0stRDhCZAEFzWmdhcnQ5VW1LTVpnTHFJVU5UTUE2X3VoTHBIOHhPTm9wZATRKUAZDZD'
});


function Home() {
    return (
      <div>
        <div className='home-1' >
          <div className='foto-prof'>
            <img src={fotoProfile} alt="foto profile"width={360}/>
          </div>

          <div className='desc-profile'>
            <div className='desc-profile-1'>
              <h1 className='name'>Bagus Nurhuda</h1>
              <h2 className='univ'>Undergraduate Student <br/>At University of Indonesia</h2>
              <div className='resume'>
                <a href='https://www.linkedin.com/in/bagusnurhuda/'>My Resume</a>
              </div>
            </div>
          </div>
        </div>
      <div id='instafeed' className='insta'>
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