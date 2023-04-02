import React from 'react';
import Grid from 'E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/components/Grid';
import InformationBox from 'E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/components/InformationBox';
import "E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/styles/App.css";

function Gameplay() {
  return (
    <div className="gameplay-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid />
    </div>
  );
}

export default Gameplay;