import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

import CoinCard from './Compnents/Coins';
import DollarInput from './Compnents/DollarInput'

function App() {
  const [value, setValue] = useState('');
  const [coinAmount, setCoinAmount] = useState({
    dollar: 0,
    halfDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  });

  const handleInput = dollarAmount => setValue(dollarAmount);

  const handleOnButtonClick = () => {
    let obj = { value }
    Axios.post('/api/getChange', obj)
      .then(data => setCoinAmount(data.data))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <h1>Change Converter!</h1>
      <DollarInput placeholder="$0.00" type="text" handleInput={handleInput} />
      <button type="button" onClick={handleOnButtonClick} disabled={value ? false : true}>Convert Me!</button>
      <CoinCard coins={coinAmount} />
    </div>
  );
}

export default App;
