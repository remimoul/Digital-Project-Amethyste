import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Offre from './components/offre.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offre" element={<Offre />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
