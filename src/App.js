import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import "./styles/App.css";
import HexGridDemo from "./components/Grid";
import Particle from "./components/Particle";
import SetConfiguration from "./page/SetConfiguration";

function App() {
  return (
    <div className="container">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/Grid" element={<HexGridDemo />} />
          <Route path="/SetConfiguration" element={<SetConfiguration />} />
        </Routes>
      </Router>
      <Particle/>
    </div>
   
  );
}

export default App;
