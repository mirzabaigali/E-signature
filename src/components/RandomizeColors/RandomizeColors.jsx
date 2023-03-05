import React from "react";

const RandomizeColors = ({ text }) => {
  const handleDanger = () => {
    document.body.style.background = "red";
  };
  const handleSuccess = () => {
    document.body.style.background = "green";
  };
  const handlePrimary = () => {
    document.body.style.background = "blue";
  };
  const handleWarning = () => {
    document.body.style.background = "yellow";
  };
  const handleRandom = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return (document.body.style.background = color);
  };
  return (
    <div>
      <h1>{!text ? "Title" : text}</h1>
      <div className="RandomizeFlex">
        <button className="inputDanger" onClick={handleDanger}>
          red
        </button>
        <button className="inputSuccess" onClick={handleSuccess}>
          green
        </button>
        <button className="inputPrimary" onClick={handlePrimary}>
          blue
        </button>
        <button className="inputWarning" onClick={handleWarning}>
          yellow
        </button>
        <button className="inputRandom" onClick={handleRandom}>
          Random
        </button>
      </div>
    </div>
  );
};

export default RandomizeColors;
