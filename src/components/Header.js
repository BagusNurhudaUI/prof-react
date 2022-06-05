import React, { useState , useEffect} from "react";
import logoHeader  from '../assets/png/header-prof.png'
import '../styles/Header.css'

export default function Header(){

    const [click, setClick] = useState(false)
    const [ navbar, setButton] = useState(true);
    const handleClick = () => {
      console.log(click);
      setClick(!click)
    }
    

    const closeMobileMenu = () => setClick(false)
  //   const [ , setNavbar] = useState(false);

  //  const changeBackground = () => {
  //      if (window.scrollY >= 400){
  //          setNavbar(true)
  //      } else {
  //          setNavbar(false)
  //      }
  //  }
   const goToHome = () =>{
     window.location.href = "/"
   }

   const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton)
  // window.addEventListener('scroll', changeBackground)
 
    return (
      <header className="header">
      <div className="header__content">
        <div className="header__logo-container" onClick={goToHome}>
          <div className="header__logo-img-cont" >
            <input type="image"
              src={ require('../assets/png/header-prof.png')}
              alt="logo image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Bagus Nurhuda</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="/" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#gallery" className="header__link">
                Gallery
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link"> Contact </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={handleClick}>
            <input type="image" 
              src={ require('../assets/png/hamburger-menu.png')}
              alt="hamburger menu"
              className={ click === true ?"header__main-ham-menu d-none" : "header__main-ham-menu"}
              
            />
            <img
              src= {require('../assets/png/ham-menu-close.png')}
              alt="hamburger menu close"
              className={ click === true? "header__main-ham-menu-close" : "header__main-ham-menu-close d-none"}
            />
          </div>
        </div>
      </div>
      <div className={click===true ? 'header__sm-menu--active' : 'header__sm-menu'}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="/" > Home </a>
            </li>

            <li className="header__sm-menu-link" onClick={closeMobileMenu}>
              <a href="#about"> About </a>
            </li>

            <li className="header__sm-menu-link" onClick={closeMobileMenu}>
              <a href="#projects"> Projects </a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMobileMenu}>
              <a href="#gallery"> Gallery </a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMobileMenu}>
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    );
}
