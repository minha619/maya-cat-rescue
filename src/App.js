// import './App.css';
import React from 'react';
import Nav from './components/Nav';
import About from  './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
       <Nav>
        <About></About>
       </Nav>
      

    // </BrowserRouter>


  );
}

export default App;
