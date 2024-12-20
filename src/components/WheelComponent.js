
import React, { useState, useRef } from "react";
import { Wheel } from "react-custom-roulette";
import "./WheelComponent.css";

const WheelComponent = ({ options, onSpinStop }) => {
  const [spinning, setSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  // Sounds
  const spinSound = useRef(new Audio("/spinsound.wav"));
  const winSound = useRef(new Audio("/winSound.mp3"));

  const formattedOptions = options.map((option) => ({ option }));

  const handleSpin = () => {
    if (formattedOptions.length > 0) {
      setSpinning(true);
      spinSound.current.loop = true; // Loop spin sound
      spinSound.current.play(); // Play spin sound
      setPrizeNumber(Math.floor(Math.random() * formattedOptions.length));
      setIsShaking(true); // Trigger shaking effect
    }
  };

  const handleStop = () => {
    setSpinning(false);
    setIsShaking(false); // Stop shaking after the wheel stops
    spinSound.current.loop = false; // Stop the looping spin sound
    spinSound.current.pause(); // Pause the spin sound
    spinSound.current.currentTime = 0; // Reset to the start
    if (formattedOptions[prizeNumber]) {
      winSound.current.play(); // Play win sound
      onSpinStop(formattedOptions[prizeNumber].option); // Pass winner to parent
    }
  };

  return (
    <div className="wheel-container">
      {formattedOptions.length > 0 ? (
        <Wheel
          mustStartSpinning={spinning}
          prizeNumber={prizeNumber}
          data={formattedOptions}
          onStopSpinning={handleStop}
          className={`wheel ${isShaking ? "shake-wheel" : ""}`}
        />
      ) : (
        <p>Please add options to spin the wheel.</p>
      )}
      <button onClick={handleSpin} disabled={spinning || options.length === 0}>
        Spin the Wheel
      </button>
      <a href="/add-options" className="add-options-link">
        Add/Remove Options
      </a>
    </div>
  );
};

export default WheelComponent;
