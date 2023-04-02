import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/styles/App.css';

function SetConfiguration() {

  const [init_plan_min, setInit_plan_min] = useState(5);
  const [init_plan_sec, setInit_plan_sec] = useState(0);
  const [init_budget, setInit_budget] = useState(5000);
  const [init_center_dep, setInit_center_dep] = useState(100);
  const [plan_rev_min, setPlan_rev_min] = useState(30);
  const [plan_rev_sec, setPlan_rev_sec] = useState(0);
  const [rev_cost, setRev_cost] = useState(100);
  const [max_dep, setMax_dep] = useState(100000);
  const [interest_pct, setInterest_pct] = useState(5);

  const navigate = useNavigate();


  const handleNextClick = () => {
    navigate('/gameplay', { state: { 
      init_budget: init_budget,
      init_plan_min: init_plan_min,
      init_plan_sec: init_plan_sec,
      init_center_dep: init_center_dep,
      plan_rev_min: plan_rev_min,
      plan_rev_sec: plan_rev_sec,
      rev_cost: rev_cost,
      max_dep: max_dep,
      interest_pct: interest_pct
    }});
  };

  return (
    <div className="container">
    <h1>Set Configuration</h1>
    <p>Enter your desired configuration below:</p>
    <div className="input-container">
      <label>Initial Planning Time (min):</label>
      <input type="number" value={init_plan_min} onChange={(e) => setInit_plan_min(e.target.value)} />
    </div>
    <div className="input-container">
      <label>Initial Planning Time (sec):</label>
      <input type="number" value={init_plan_sec} onChange={(e) => setInit_plan_sec(e.target.value)} />
    </div>
    <div className="input-container">
      <label>Initial Budget:</label>
      <input type="number" value={init_budget} onChange={(e) => setInit_budget(e.target.value)} />
    </div>
    <div className="input-container">
      <label>Initial Center Deposit:</label>
      <input type="number" value={init_center_dep} onChange={(e) => setInit_center_dep(e.target.value)} />
    </div>
    <div className="input-container">
      <label>Planning Revenue (min):</label>
      <input type="number" value={plan_rev_min} onChange={(e) => setPlan_rev_min(e.target.value)} />
    </div>
    <div className="input-container">
      <label>Planning Revenue (sec):</label>
      <input type="number" value={plan_rev_sec} onChange={(e) => setPlan_rev_sec(e.target.value)} />
    </div>
    <div className="input-container">
      <label>Revenue Cost:</label>
      <input type="number" value={rev_cost} onChange={(e) => setRev_cost(e.target.value)} />
    </div>
    <div className="input-container">
      <label>
        Maximum Departmental Revenue:
        <input type="number" value={max_dep} onChange={(e) => setMax_dep(e.target.value)} />
      </label>
     </div>
     <div className="input-container">
      <label>
        Interest Percentage:
        <input type="number" value={interest_pct} onChange={(e) => setInterest_pct(e.target.value)} />
      </label>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default SetConfiguration;
