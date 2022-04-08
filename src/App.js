import "./styles.css";
import { useState } from "react";
export default function App() {
  const [balance, setBalance] = useState([]);
  const [deposit, setDeposit] = useState(0);
  var temp;

  const sam = (e) => {
    e.preventDefault();
    temp = Number(balance) + deposit;
    setDeposit(temp);
    setBalance("");
  };

  return (
    <form>
      <div className="App">
        <h1>ATM Deposit</h1>
        <h2> Enter Amount is {deposit}</h2>
        <label> Enter the amount </label>
        <input
          type="Number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />

        <br></br>
        <br></br>

        <select>
          <option>Deposit</option>
          <option>Withdraw</option>
        </select>

        <br></br>
        <br></br>

        <button onClick={sam}>submit</button>
      </div>
    </form>
  );
}
