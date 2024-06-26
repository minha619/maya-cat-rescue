// import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Adopt from './components/Adopt';
import Application from './components/Application';
import Adoptionlist from './components/Adoptionlist';
import Contact from './components/Contact';
import Donate from './components/Donate';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className='h-screen flex flex-col'>
        <Nav />
        <div className='flex-1'>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/application" element={<Application />} />
            <Route path="/adoptionlist" element={<Adoptionlist />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
      </div>

    </HashRouter>
  );
}

export default App;
