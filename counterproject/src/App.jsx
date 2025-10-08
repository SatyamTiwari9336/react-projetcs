import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addvalue = () => {
    console.log("value added", counter);
    counter = counter + 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addvalue}>Add Value{counter}</button>
      <br></br>
      <br></br>
      <button>Remove Value{counter}</button>
      <p>paragraph {counter}</p>
    </>
  );
}

export default App;
