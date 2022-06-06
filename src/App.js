import './App.css';
import Akur from './pages/Akur'
import Kasbaik from './pages/Kasbaik'
import Experience from './components/Experience';
import Hobby from './components/Hobby';
import Skills from './components/Skills';
import Home from './pages/Home';
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
          <Route exact path="/akur" element={<Akur/>}/>
          <Route exact path="/kasbaik" element={<Kasbaik/>}/>
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
