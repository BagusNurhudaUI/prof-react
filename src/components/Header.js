import React, { useState , useEffect} from "react";
import logoHeader from '../image/logo.png'
import '../styles/Header.css'

export default function Header(){

    const [click, setClick] = useState(false)
    const [ navbar, setButton] = useState(true);
    const handleClick = () => setClick(!click)
    

    const closeMobileMenu = () => setClick(false)
    const [ , setNavbar] = useState(false);

   const changeBackground = () => {
       if (window.scrollY >= 400){
           setNavbar(true)
       } else {
           setNavbar(false)
       }
   }

   const showButton = () => {
    if (window.innerWidth <= 1000) {
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
        <>
          <nav className={navbar ? 'header-bg navbar' : 'navbar'}>
            <div className="navbar-container container">
            <a href="/" className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logoHeader} alt='logo web' height={50}/>
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="/" className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="/about"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="/Experience"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="/Hobby"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hobby
              </a>
            </li>
            <li className='nav-item resume-header'>
              <a
                href="/Hobby"
                className='nav-links'
                onClick={closeMobileMenu} 
              >
                Contact
              </a>
            </li>
            
          </ul>
            </div>
          </nav>
        </>
    );
}
