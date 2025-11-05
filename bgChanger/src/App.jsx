import { useState } from "react";

function App() {
  const [Color, setColor] = useState("olive");

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: Color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 rounded-xl inset-x-0  ">
        <div className="flex flex-wrap justify-center px-20 rounded-xl inset-x-0 gap-40 bg-blue-950 ">
          <button
            onClick={() => setColor("orange")}
            className="p-4"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("green")}
            className=" p-4"
            style={{ backgroundColor: "green " }}
          >
            green
          </button>
          <button
            onClick={() => setColor("black")}
            className=" p-4"
            style={{ backgroundColor: "black " }}
          >
            black
          </button>
          <button
            onClick={() => setColor("pink")}
            className=" p-4"
            style={{ backgroundColor: "pink " }}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
