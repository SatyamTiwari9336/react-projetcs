import { useState } from "react";
import "./App.css";

function App() {
  //hook value,function =usestate (initial value)
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addvalue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      setCounter(counter + 1);
    }
  };

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Calm Down mate value is Already 0");
    }
  };
  return (
    <>
      {/*this is a comment and cant be written otherwise in react jsx */}
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
