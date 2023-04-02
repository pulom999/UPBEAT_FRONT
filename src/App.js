import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import "./styles/App.css";
import HexGridDemo from "./components/Grid";
import Particle from "./components/Particle";
import SetConfiguration from "./page/SetConfiguration";
import Gameplay from "./page/gameplay";
import init_budget from "./page/SetConfiguration";

function App() {
  return (
    <div className="container">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/SetConfiguration" element={<SetConfiguration />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/HexGridDemo" element={<HexGridDemo init_budget={init_budget} />} />
        </Routes>
      </Router>
      <Particle/>
    </div>
   
  );
}

export default App;
