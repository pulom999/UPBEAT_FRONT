import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HexagonGrid from './hexagongrid.';
import HexGridDemo from './Grid';

function MainMenu() {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showHexMap, setShowHexMap] = useState(false);
  const navigate = useNavigate();

  function handleHowToPlayClick() {
    setShowHowToPlay(true);
  }

  function handleHowToPlayClose() {
    setShowHowToPlay(false);
  }

  function handlePlayClick() {
    setShowHexMap(true);
    navigate('/grid');
  }

  return (
    <div>
      <h1>Welcome to UPBEAT</h1>
      <div className="button-container">
        <button className="play-btn" onClick={handlePlayClick}>
          Play
        </button>
        <button className="htp-btn" onClick={handleHowToPlayClick}>
          How to Play
        </button>
      </div>

      {showHowToPlay && (
        <div className="modal">
          <div className="modal-content">
            <h2>How to Play</h2>
            <p>Use the arrow keys to move the map.</p>
            <p>Use the left mouse to interact.</p>
            <button onClick={handleHowToPlayClose}>Close</button>
          </div>
        </div>
      )}
       {showHexMap && <HexGridDemo />}
    </div>
  );
}

export default MainMenu;
