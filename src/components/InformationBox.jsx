import React from 'react';
import "E:/OOPWORK/upbeat project/UPBEAT-FRONT/upbeat-front/src/styles/App.css";
import ConfigurationContext from "../ConfigurationContext.js";


function InformationBox({
    currentPlayerIndex,
    gameStatus,
    action,
    direction,
    value,
    players,
    init_plan_min,
    init_plan_sec,
    plan_rev_min,
    plan_rev_sec,
    rev_cost,
    max_dep,
    interest_pct
  }) {
    const playerInfos = players.map((player) => (
      <div key={player.playerIndex}>
        <h3>Player {player.playerIndex}</h3>
        <p>Budget: {player.budget}</p>
        <p>City Center: ({player.cityCenterPos[0]}, {player.cityCenterPos[1]})</p>
        <p>Crew Pos: ({player.crewPos[0]}, {player.crewPos[1]})</p>
        <p>Status: {player.status}</p>
      </div>
    ));

  return (
    <div className="Information-Box">
      <h2>Information Box</h2>
      <div>
        <p>Current Player Index: {currentPlayerIndex}</p>
        <p>Game Status: {gameStatus}</p>
        <p>Action: {action}</p>
        <p>Direction: {direction}</p>
        <p>Value: {value}</p>
      </div>
      <div>{playerInfos}</div>
    </div>
  );
}

export default InformationBox;
