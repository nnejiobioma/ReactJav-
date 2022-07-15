import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar"
import { Route, Routes } from "react-router-dom"
// import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
    </>
        
  );
}

export default App;
