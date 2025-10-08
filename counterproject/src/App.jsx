import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addvalue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const removevalue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addvalue}>Add Value{counter}</button>
      <br></br>
      <br></br>
      <button onClick={removevalue}>Remove Value{counter}</button>
      <p>paragraph {counter}</p>
    </>
  );
}

export default App;
