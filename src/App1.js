import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [deposit, setDeposit] = useState();
  const [isdeposit, setIsDeposit] = useState();

  const Deposit = (e) => {
    e.preventDefault();
    if (isdeposit === "Deposit") {
      setValue(Number(deposit) + value);
    } else {
      const ibb = value - Number(deposit);
      if (ibb < 0) {
        alert(" Account is empty....");
      } else {
        setValue(ibb);
      }
    }
  };
  // function h (e){
  //   onChange(e.target.value)
  // }
  return (
    <div className="App">
      <h1>ATM Mechine</h1>
      <h2>Account Balance ${value}</h2>
      <label>Select&nbsp;: &nbsp;&nbsp; </label>
      <select
        onChange={(e) => {
          setIsDeposit(e.target.value);
        }}
      >
        <option></option>
        <option value="Deposit">Deposit</option>
        <option value="Withdraw">Withdraw</option>
      </select>
      <br />
      <h4>{isdeposit} Amount </h4>
      <br />
      <input
        type="number"
        value={deposit}
        // onChange={h}
        onChange={(e) => {
          setDeposit(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit" onClick={Deposit}>
        Enter
      </button>
    </div>
  );
}
