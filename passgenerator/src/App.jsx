import "./App.css";
import { useState } from "react";
function App() {
  const [length, setlength] = useState(15);
  return (
    <>
      <h1 className=" text-white text-4xl text-center ">Password Generator</h1>
      <br></br>
      <input
        type="text"
        className="m-5 border-4  bg-gray-500 justify-around text-4xl py-4 px-6 text-center rounded-3xl"
        placeholder="Password"
      ></input>
      <br></br>
      <input
        onChange={(e) => {
          setlength(e.target.value);
        }}
        className="text-3xl "
        type="range"
        id="passlen"
        value={length}
        max={20}
        min={10}
        label="length"
      ></input>
      <label className="text-3xl pl-2 " htmlFor="passlen">
        ⬅️PassWord Length : {length}
      </label>
      <br></br>
      <input type="checkbox" id="numallowed" className="size-6 mt-10" />
      <label htmlFor="numallowed" className="text-3xl  text-lime-300">
        -Numbers
      </label>
      <input type="checkbox" id="charallowed" className="size-6 ml-25 mt-10" />
      <label htmlFor="charallowed" className="text-3xl  text-lime-300">
        -Charachters
      </label>
    </>
  );
}

export default App;
