import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // 1 INR = 0.011 EUR
    const result = (parseFloat(amount) * conversionRate).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount (INR):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Convert</button>
      </form>

      {euro && (
        <h3>{amount} INR = {euro} Euro</h3>
      )}
    </div>
  );
}

export default CurrencyConvertor;
