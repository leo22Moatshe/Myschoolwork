import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./DeleteCard.css";

function DeleteCard() {
  const [id, setId] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [canceled, setCanceled] = useState(false);
  const navigate = useNavigate();

  const handleIDSubmit = (e) => {
    e.preventDefault();

    // Replace this with logic to fetch user details from the server using the entered ID
    // In this example, we'll use static data
    const userData = {
      name: 'John',
      surname: 'Doe',
      cardNumber: '1234-5678-9012-3456', // Replace with actual card number
    };

    setName(userData.name);
    setSurname(userData.surname);
    setCardNumber(userData.cardNumber);
    setShowDetails(true);
  };

  const handleCancel = () => {
    // Replace this with logic to cancel the user's card
    // In this example, we'll set the "canceled" state to true
    setCanceled(true);
  };

  const handleKeyboardClick = (value) => {
    if (value === 'correct') {
      setId(id.slice(0, -1)); // Backspace
    } else {
      setId(id + value);
    }
  };

  return (
    <div className='main'>
      <h1>Enter Your ID Number</h1>
      {showDetails ? (
        <div>
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
          <p>Card Number: {cardNumber}</p>
          {canceled ? (
            <p>Your card has been canceled. We have sent you a notification.</p>
          ) : (
            <div>
              <p>Do you want to cancel your card?</p>
              <button onClick={handleCancel}>Yes</button>
              <button onClick={() => setCanceled(true)}>No</button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleIDSubmit}>
          <label>
            Enter ID:
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyDown={(e) => e.preventDefault()} // Prevent manual input
            />
          </label>
          <div className="keyboard">
            <button onClick={() => handleKeyboardClick('1')}>1</button>
            <button onClick={() => handleKeyboardClick('2')}>2</button>
            <button onClick={() => handleKeyboardClick('3')}>3</button>
            <button onClick={() => handleKeyboardClick('4')}>4</button>
            <button onClick={() => handleKeyboardClick('5')}>5</button>
            <button onClick={() => handleKeyboardClick('6')}>6</button>
            <button onClick={() => handleKeyboardClick('7')}>7</button>
            <button onClick={() => handleKeyboardClick('8')}>8</button>
            <button onClick={() => handleKeyboardClick('9')}>9</button>
            <button onClick={() => handleKeyboardClick('0')}>0</button>
            <button onClick={() => handleKeyboardClick('correct')}>Correct</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default DeleteCard;
