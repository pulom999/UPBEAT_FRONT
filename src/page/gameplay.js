import React from 'react';
import Grid from 'E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/components/Grid';
import InformationBox from 'E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/components/InformationBox';
import { Link } from 'react-router-dom';
import "E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/styles/App.css";





function Gameplay() {
  return (
    <div>
      <div className="gameplay-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Grid />
      </div>
      <div>
        <div style={{ position: 'absolute', left: 0, top: '5%', transform: 'translateY(-50%)' }}>
          <Link to="/SetPlanPlayer1"><button>Set Plan Player 1</button></Link>
        </div>
        <div style={{ position: 'absolute', left: 0, top: '10%', transform: 'translateY(-50%)' }}>
          <Link to="/SetPlanPlayer2"><button>Set Plan Player 2</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
