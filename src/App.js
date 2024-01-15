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
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='h-screen flex flex-col'>
        <Nav />
        <div className='flex-1'>
          <Routes>
            <Route path="/maya-cat-rescue" element={<Home />} />
            <Route path="home/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/application" element={<Application />} />
            <Route path="/adoptionlist" element={<Adoptionlist />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
