import React from 'react';
import Drawer from './Drawer'
import Home from './Home'
import About from './About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home></Home>} />
          <Route path="/About" element={<About></About>} />
        </Routes>
      </BrowserRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
