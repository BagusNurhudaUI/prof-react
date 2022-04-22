import './App.css';
import About from "./components/About";
import Contact from './components/Contact';
import Hobby from './components/Hobby';
import Skills from './components/Skills';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
      THIS IS A TEMPLATE
      </nav>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/skill" element={<Skills/>}/>
          <Route exact path="/hobby" element={<Hobby/>}/>
        </Routes>
      </Router>
      {/* <Router> this is main
        <div>
          <Routes>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/hobby">
                <Hobby />
              </Route>
              <Route path="/skill">
                <Skills />
              </Route>
          </Routes>
        </div>
      </Router> */}
    </div>
    
  );
}

export default App;
