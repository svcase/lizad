import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Gallery from './containers/Gallery';
import About from './containers/About';
import Contact from './containers/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//delete basename for local dev

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
