import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './home';
import Services from './services';
import Contact from './contact';
import About from './about';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "/about" element = {<About/>}/>
        <Route path= "/services" element={<Services/>}/>
        <Route path= "/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
