import './App.css';
import About from "./components/about/About";
import Experience from './components/experience/Experience';
import Hobby from './components/Hobby';
import Skills from './components/Skills';
import Home from './components/home/Home';
import logoHeader from './image/logo.png'
import logoFooter from './image/logo-footer.jpg'
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
        <div className="logo" id="logo" >
                <a href='/'><img src={logoHeader} alt="logoweb" height="50" href="/"/></a>
            </div>
            <ul className="nav-menu" id="nav-menu">
                <li className="nav-links"><a href="/">Home</a></li>
                <li className="nav-links"><a href="/about">About</a></li>
                <li className="nav-links"><a href="/experience">Experience</a></li>
                <li className="nav-links"><a  href="/hobby">Hobby</a></li>
            </ul>
            <div class="contact-me nav-links nav-links-btn">
                    <a  href="https://wa.me/6287888254504">Contact Me</a>
                </div>
            <div className="menu-toggle" id="menu-toggle">
                <div className="toggle-line"></div>
                <div className="toggle-line"></div>
                <div className="toggle-line"></div>
            </div>
        </nav>
    </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
          <Route exact path="/skills" element={<Skills/>}/>
          <Route exact path="/hobby" element={<Hobby/>}/>
        </Routes>
      </Router>
      <footer className="footer">
        <div className="container-footer">
            <img src={logoFooter} alt="logo-footer" height="50" />
        </div>
        <div>
          <p className="copyright">©2022 Bagus Nurhuda All rights reserved</p>
        </div>
          
        
        
    </footer>
    </div>
    
  );
}

export default App;
