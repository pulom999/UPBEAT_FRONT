import React, { useEffect } from "react";
import HexagonGrid from "./hexagongrid.";
import times from "lodash/times";
import { useNavigate } from "react-router-dom";
import InformationBox from "./InformationBox";

const HexGridDemo = (props) => {
  const navigate = useNavigate();
  const { init_budget } = props;

  const handleBackClick = () => {
    const confirm = window.confirm("Go back to main menu?");
    if (confirm) {
      navigate("/");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "x") {
        const confirm = window.confirm("Go back to main menu?");
        if (confirm) {
          navigate("/");
        }
      }
    };


    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  const getHexProps = (hexagon) => {
    return {
      style: {
        fill: "#007aff",
        stroke: "white"
      },
      onClick: () => alert(`Hexagon n.${hexagon} has been clicked`)
    };
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={0}
        fontWeight="lighter"
        style={{ fill: "white" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  //จำนวนrow
  let hexagons = times(120, (id) => id);

  return (
    <div className="grid-container">
       <button className="back-btn" onClick={handleBackClick} style={{position:'screenLeft'}}>
        Back to main menu
      </button>
      <HexagonGrid
        //ขนาด
        gridWidth={500}
        gridHeight={700}
        hexagons={hexagons}
        hexProps={getHexProps}
        renderHexagonContent={renderHexagonContent}
        className="hexagon-grid"
      />
      <InformationBox
        currentPlayerIndex={0}
        gameStatus="In Progress"
        action="Move"
        direction="North"
        value={10}
        players={[
          {
            playerIndex: 1,
            budget: init_budget,
            cityCenterPos: [1, 1],
            crewPos: [2, 2],
            status: "Alive"
          },
          {
            playerIndex: 2,
            budget: init_budget,
            cityCenterPos: [3, 3],
            crewPos: [4, 4],
            status: "Dead"
          }
        ]}
      />
    </div>
  );
};

export default HexGridDemo;
