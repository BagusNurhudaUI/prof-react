import './App.css';
import About from "./components/About";
import Experience from './components/Experience';
import Hobby from './components/Hobby';
import Skills from './components/Skills';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
          <Route exact path="/skills" element={<Skills/>}/>
          <Route exact path="/hobby" element={<Hobby/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;
