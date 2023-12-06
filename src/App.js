// import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from  './components/About';
import Application from './components/Application';
import Adopt from './components/Adopt';
import Contact from './components/Contact';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Nav>
       </Nav>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/adopt" element={<Adopt/>}/>
          <Route path="/application" element={<Application/>}/>
          <Route path="/adoptionlist" element={<Adopt/>}/>
          <Route path="/contactus" element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
