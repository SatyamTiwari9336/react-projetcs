import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  Reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";
function App() {
  const [amount, setamount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleincreamentclick() {
    dispatch(increment());
  }
  function handledecreamentclick() {
    dispatch(decrement());
  }

  function handelreset() {
    dispatch(Reset());
  }
  function addinput() {
    dispatch(incrementByAmount(amount)); //sending to payload
  }

  return (
    <>
      <button onClick={handleincreamentclick}>+</button>
      <div>value: {count}</div>
      <button onClick={handledecreamentclick}>-</button>
      <br />
      <br />
      <button onClick={handelreset}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="enter amount "
        onChange={(e) => setamount(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={addinput}>addinput</button>
    </>
  );
}

export default App;
