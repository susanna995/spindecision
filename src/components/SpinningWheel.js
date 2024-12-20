import React, { useState } from 'react';
import './SpinningWheel.css';

const SpinningWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const spinWheel = () => {
    setIsSpinning(true);

    // Randomly select an option for the result
    const randomOption = options[Math.floor(Math.random() * options.length)];
    setSpinResult(randomOption);

    // Reset the spin state after the animation is done
    setTimeout(() => {
      setIsSpinning(false);
    }, 4000); // Matches the duration of the spinning animation
  };

  return (
    <div className="wheel-container">
      <div className={`wheel ${isSpinning ? 'spin' : ''}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className="segment"
            style={{
              transform: `rotate(${(360 / options.length) * index}deg)`,
              backgroundColor: `hsl(${(360 / options.length) * index}, 70%, 60%)`,
            }}
          >
            <div className="center-label">{option}</div>
          </div>
        ))}
      </div>
      <button onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
      {spinResult && !isSpinning && (
        <div className="result">
          <h2>Result: {spinResult}</h2>
        </div>
      )}
    </div>
  );
};

export default SpinningWheel;
