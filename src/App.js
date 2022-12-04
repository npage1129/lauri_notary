import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import Services from './services';
import Contact from './contact';
import About from './about';

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
