import React, { useState } from 'react';
import './Spinwheel.css';


const messages = [
  'Message for color 1',
  'Message for color 2',
  'Message for color 3',
  'Message for color 4',
  'Message for color 5',
  'Message for color 6',
  'Message for color 7',
];

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');
  const [showButton, setShowButton] = useState(true);

  const startSpin = () => {
    if (!spinning) {
      setSpinning(true);
      setShowButton(false);
      const spinResult = Math.floor(Math.random() * messages.length);
      setTimeout(() => {
        setResult(spinResult);
        setSpinning(false);
        setMessage(messages[spinResult]);
        setShowButton(true);
      }, 3000); // Change the duration as needed
    }
  };

  return (
    <div className="spin-wheel">
      <h1>Spin-a-Wheel Game</h1>
      <p>{message}</p>
      <div className="wheel-container">
        <div
          className="wheel-section"
          style={{ transform: spinning ? `rotate(${720 + result * (360 / messages.length)}deg)` : 'none' }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className="wheel-section"
            >
              
            </div>
          ))}
        </div>
      </div>
      {showButton && (
        <button className="spin-button" onClick={startSpin} disabled={spinning}>
          {spinning ? 'Spinning...' : 'Spin'}
        </button>
      )}
    </div>
  );
};

export default SpinWheel;
