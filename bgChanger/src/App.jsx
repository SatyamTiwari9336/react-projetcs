import { useState } from "react";

function App() {
  const [Color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: Color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
          test
        </div>
      </div>
    </>
  );
}

export default App;
