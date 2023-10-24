import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./FingerPrint.css";
import videoSrc from "./video/World.mp4";

function FingerPrint() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const pinNames = {
    '12345': 'Mr. Leonardo',
    '5678': 'Ms. Smith',
    '9012': 'Dr. Johnson',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin in pinNames) {
      const name = pinNames[pin];
      alert(`Hello, ${name}!`);
      navigate('/MainMenu');
    } else {
      setError('Incorrect PIN. Please try again.');
    }
  };

  const handleKeyPress = (value) => {
    if (value === 'correct') {
      setPin((prevPin) => prevPin.slice(0, -1)); // Remove the last digit
    } else {
      setPin((prevPin) => prevPin + value);
    }
  };

  return (
    <div className="FingerPrint">
      <div className="video-container">
        <video src={videoSrc} autoPlay loop muted className="video-bg" />
        <div className="content">
          <div className="Logo">
            <h1 to="/" className="navbar-logo">
              Rich Bank <i className="fab fa-typo3" />
            </h1>
          </div>
      <h1>Please Enter Your PIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter PIN:
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => e.preventDefault()} // Prevent manual input
          />
        </label>
        <div className="keyboard">
          <button onClick={() => handleKeyPress('1')}>1</button>
          <button onClick={() => handleKeyPress('2')}>2</button>
          <button onClick={() => handleKeyPress('3')}>3</button>
          <button onClick={() => handleKeyPress('4')}>4</button>
          <button onClick={() => handleKeyPress('5')}>5</button>
          <button onClick={() => handleKeyPress('6')}>6</button>
          <button onClick={() => handleKeyPress('7')}>7</button>
          <button onClick={() => handleKeyPress('8')}>8</button>
          <button onClick={() => handleKeyPress('9')}>9</button>
          <button onClick={() => handleKeyPress('0')}>0</button>
          <button onClick={() => handleKeyPress('correct')}>correct</button>
          <button onClick={() => handleKeyPress('Cancel')}><a href='/'>Cancel</a></button>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
    </div> 
    </div>
  );
}

export default FingerPrint;
