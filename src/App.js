import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import "./styles/App.css";
import HexGridDemo from "./components/Grid";
import Particle from "./components/Particle";
import SetConfiguration from "./page/SetConfiguration";
import Gameplay from "./page/gameplay";
import ConfigurationContext from "./ConfigurationContext.js";

function App() {
  const [init_plan_min, setInit_plan_min] = useState(5);
  const [init_plan_sec, setInit_plan_sec] = useState(0);
  const [init_budget, setInit_budget] = useState(5000);
  const [init_center_dep, setInit_center_dep] = useState(100);
  const [plan_rev_min, setPlan_rev_min] = useState(30);
  const [plan_rev_sec, setPlan_rev_sec] = useState(0);
  const [rev_cost, setRev_cost] = useState(100);
  const [max_dep, setMax_dep] = useState(100000);
  const [interest_pct, setInterest_pct] = useState(5);
  return (
    <ConfigurationContext.Provider
      value={{
        init_plan_min,
        setInit_plan_min,
        init_plan_sec,
        setInit_plan_sec,
        init_budget,
        setInit_budget,
        init_center_dep,
        setInit_center_dep,
        plan_rev_min,
        setPlan_rev_min,
        plan_rev_sec,
        setPlan_rev_sec,
        rev_cost,
        setRev_cost,
        max_dep,
        setMax_dep,
        interest_pct,
        setInterest_pct,
      }}
    >
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainMenu />} />
            <Route path="/SetConfiguration" element={<SetConfiguration />} />
            <Route path="/gameplay" element={<Gameplay />} />
          </Routes>
        </Router>
        <Particle />
      </div>
    </ConfigurationContext.Provider>
  );
}

export default App;
