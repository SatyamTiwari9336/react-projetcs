import "./App.css";
import { useState, useEffect, useCallback } from "react";
function App() {
  const [length, setlength] = useState(15);
  const [numberallow, setnumber] = useState(false);
  const [charallow, setchar] = useState(false);
  const [password, setpassword] = useState("");
  const passwordgenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberallow) str += "1234567890";
    if (charallow) str += "*&^%$#@!+-";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallow, charallow, setpassword]);

  useEffect(passwordgenerator, [length, charallow, numberallow, setpassword]);
  return (
    <>
      <h1 className=" text-white text-4xl text-center ">Password Generator</h1>
      <br></br>
      <div>
        <input
          type="text"
          className="m-5 border-4  bg-gray-500 justify-around text-4xl py-4 px-6 text-center rounded-3xl"
          value={password}
          readOnly
          placeholder="Password"
        ></input>
        <button className="">Copy</button>
        <br></br>
        <input
          onChange={(e) => {
            setlength(e.target.value);
          }}
          className="text-3xl "
          type="range"
          id="passlen"
          value={length}
          max={15}
          min={5}
          label="length"
        ></input>
        <label className="text-3xl pl-2 " htmlFor="passlen">
          ⬅️PassWord-Length : {length}
        </label>
        <br></br>
        <input
          onChange={() => {
            setnumber((prev) => !prev);
          }}
          type="checkbox"
          id="numallowed"
          className="size-6 mt-10"
        />
        <label htmlFor="numallowed" className="text-3xl  text-lime-300">
          -Numbers
        </label>
        <input
          onChange={() => {
            // console.log(charallow);
            setchar((prev) => !prev);
          }}
          type="checkbox"
          id="charallowed"
          className="size-6 ml-25 mt-10"
        />
        <label htmlFor="charallowed" className="text-3xl  text-lime-300">
          -Charachters
        </label>
      </div>
    </>
  );
}

export default App;
