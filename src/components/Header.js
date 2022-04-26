import React, { useState , useEffect} from "react";
import logoHeader from '../image/logo.png'
import '../styles/Header.css'

export default function Header(){

    const [click, setClick] = useState(false)
    const [ , setButton] = useState(true);
    const handleClick = () => setClick(!click)
    

    const closeMobileMenu = () => setClick(false)
    const [navbar, setNavbar] = useState(false);

   const changeBackground = () => {
       if (window.scrollY >= 400){
           setNavbar(true)
       } else {
           setNavbar(false)
       }
   }

   const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  console.log(window.innerWidth);
  window.addEventListener('resize', showButton)
   window.addEventListener('scroll', changeBackground)
   console.log(click);
   console.log(setClick);
    return (
        <header className={navbar ? 'header-bg' : ''}>
        <nav className='navbar '>
              <div className="logo" id="logo" >
                  <a href='/'><img src={logoHeader} alt="logoweb" height="50" href="/"/></a>
              </div>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'} id="nav-menu">
                  <li>
                  <a href="/" className="nav-links" onClick={closeMobileMenu}>Home</a> 
                  </li>
                  <li>
                    <a href='/about' className="nav-links" onClick={closeMobileMenu}>About</a>
                  </li>
                  <li>
                    <a href='/experience' className="nav-links" onClick={closeMobileMenu}>Experience</a>
                  </li>
                  <li>
                    <a href='/hobby' className="nav-links" onClick={closeMobileMenu}>Hobby</a>
                  </li>
                  
              </ul>
              <div class="contact-me nav-links-mobile ">
                <a  href="https://wa.me/6287888254504">Resume</a>
                </div>

            
              {/* <div className="menu-toggle" id="menu-toggle">
                  <div className="toggle-line"></div>
                  <div className="toggle-line"></div>
                  <div className="toggle-line"></div>
              </div> */}
        </nav>
      </header>
    );
}
