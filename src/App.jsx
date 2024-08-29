import React, { lazy, useEffect, useMemo, useState } from 'react'
import './App.css'
import useCurrencyApi from './hooks/useCurrencyApi';
import { Button, InputBox } from './components/index';
import { FaArrowsRotate } from "react-icons/fa6";

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("pkr");

  // Custom Hook
  const [data, loading, error] = useCurrencyApi(from);

  // Get All Keys inside object
  const options = Object.keys(data);

  // Swipping Values
  const handleSwip = () => {
    setFrom(to);
    setTo(from);
  }

  // Amount Calculation
  const handleCalculatedAmount = useMemo(() => {
    return (amount * data[to]).toFixed(2);
  }, [amount, from, to, data]);

  return (
    <section id='currencyConverter'>
      <div className='custom-container my-5'>
        <div className="currency-content shadow">
          <h4 id='heading'>Currency Converter</h4>
          <InputBox
            label={"From"}
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            currencyOptions={options}
            defaultCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            disabled={false}
          />
          <Button
            text="Swip"
            clasName=''
            type={"button"}
            onCurrencySwip={handleSwip}
            icon={<FaArrowsRotate />}
          />
          <InputBox
            label={"To"}
            amount={handleCalculatedAmount}
            currencyOptions={options}
            defaultCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            disabled={true}
          />
          <span id='currencyText'>Convert {from.toUpperCase()} To {to.toUpperCase()}</span>
        </div>
      </div>
    </section>
  )
}

export default App;
