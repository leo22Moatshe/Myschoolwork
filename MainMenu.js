import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import videoSrc from '../video/World.mp4';

function MainMenu() {
  const [account, setAccount] = useState({
    balance: 10000,
  });

  function withdrawMoney(amount) {
    if (account.balance >= amount) {
      setAccount({
        balance: account.balance - amount,
      });
    } else {
      alert('Insufficient funds');
    }
  }

  function depositMoney(amount) {
    if (amount > 0) {
      setAccount({
        balance: account.balance + amount,
      });
    } else {
      alert('Please enter a valid deposit amount.');
    }
  }

  function handleOwnAmountClick() {
    const amount = prompt('Enter the amount you want to withdraw:');
    if (amount !== null) {
      withdrawMoney(parseFloat(amount));
    }
  }

  function handleAmountClick() {
    const amount = prompt('Enter the amount you want to deposit:');
    if (amount !== null) {
      depositMoney(parseFloat(amount));
    }
  }

  return (
    <div className="MainMenu">
      <div className="content">
        <div className="LOGO">
          <h1 to="/" className="LOGO">
            RICH BANK <i className="typo" />
          </h1>
        </div>
        <h1 className="Account"> Account Balance: {account.balance} </h1>
        <div className="container">
          <video src={videoSrc} autoPlay loop muted className="video-bg" />
          <a className="FAmount">
            <span className="Favourite" onClick={() => withdrawMoney(400)}>
              Favourite Amount R400
            </span>
          </a>
          <a className="BAmount">
            <span className="amount" onClick={() => withdrawMoney(1000)}>
              R1000
            </span>
          </a>
          <a className="CAmount">
            <span className="Amount3" onClick={handleAmountClick}>
              Deposit
            </span>
          </a>
          <a className="Amount" onClick={handleOwnAmountClick}>
            <span className="AMount-A">Own Amount</span>
          </a>
          <Link to="/FingerPrint">
            <a className="CAncel" href="/">
              <span className="CAncel-1">Cancel</span>
            </a>
          </Link>
          <Link to="/Option">
            <a className="MORE" href="/">
              <span className="OPTIONS">More OPTIONS</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
