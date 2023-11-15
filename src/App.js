// import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from  './components/About';
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
          <Route path="home/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
