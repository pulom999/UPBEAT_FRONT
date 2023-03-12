import React, { useEffect } from "react";
import HexagonGrid from "./hexagongrid.";
import times from "lodash/times";
import { useNavigate } from "react-router-dom";

const HexGridDemo = () => {
  const navigate = useNavigate();

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
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "white" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  //จำนวนrow
  let hexagons = times(300, (id) => id);

  return (
    <div className="grid-container">
      <HexagonGrid
        //ขนาด
        gridWidth={2500}
        gridHeight={1500}
        hexagons={hexagons}
        hexProps={getHexProps}
        renderHexagonContent={renderHexagonContent}
        className="hexagon-grid"
      />
    </div>
  );
};

export default HexGridDemo;