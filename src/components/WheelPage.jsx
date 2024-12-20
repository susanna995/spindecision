


import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Wheel } from "react-custom-roulette";
import "./WheelPage.css";

const WheelPage = () => {
  const location = useLocation();
  const [selectedPrize, setSelectedPrize] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(null);
  const spinSoundRef = useRef(new Audio("/spinsound.wav"));
  const winSoundRef = useRef(new Audio("/winSound.mp3"));

  const options = location.state?.options || [];
  const data = options.map((option) => ({ option }));

  // Function to generate a random dark color
  const getRandomDarkColor = () => {
    const r = Math.floor(Math.random() * 255); // Red value (0-127)
    const g = Math.floor(Math.random() * 255); // Green value (0-127)
    const b = Math.floor(Math.random() * 255); // Blue value (0-127)
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Generate an array of random dark colors
  const wheelColors = Array.from({ length: data.length }, getRandomDarkColor);

  const handleSpinStop = () => {
    if (prizeIndex !== null && prizeIndex >= 0 && prizeIndex < data.length) {
      setSelectedPrize(data[prizeIndex].option);
      setShowPopup(true);
    } else {
      console.error("Invalid prize index:", prizeIndex);
    }
    setSpinning(false);
    spinSoundRef.current.pause();
    spinSoundRef.current.currentTime = 0;
  };

  useEffect(() => {
    if (showPopup) {
      winSoundRef.current.play();
    }
  }, [showPopup]);

  useEffect(() => {
    if (spinning) {
      spinSoundRef.current.loop = true;
      spinSoundRef.current.play();
    } else {
      spinSoundRef.current.pause();
      spinSoundRef.current.currentTime = 0;
    }
  }, [spinning]);

  const handleSpin = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setPrizeIndex(randomIndex);
    setSpinning(true);
  };

  return (
    <div className="wheel-page">
      <div
  style={{
    display: "inline-block",
    padding: "10px 20px",
    border: "2px solid black",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }}
>
  <h1 style={{ color: "black", margin: 0 }}>Spin the Wheel</h1>
</div>
      <div className="wheel-container">
        <Wheel
          mustStartSpinning={spinning}
          prizeNumber={prizeIndex}
          data={data}
          backgroundColors={wheelColors}
          onStopSpinning={handleSpinStop}
        />
      </div>
      <button
        className="spin-button"
        onClick={handleSpin}
        disabled={spinning || data.length === 0}
        style={{ backgroundColor: "#2C3E50", color: "white" }}
      >
        {spinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {showPopup && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ color: "#F39C12" }}>Fate Decided!</h2>
            <p>
              You have selected: <strong>{selectedPrize}</strong>
            </p>
            <p>Congratulations on your selection!</p>
            <button
              style={{ backgroundColor: "#8E44AD", color: "white" }}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WheelPage;
