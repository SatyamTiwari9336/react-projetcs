import React from "react";
import NewCard from "./Newcard.jsx"; // adjust path if needed
import SatyamImg from "./Satyam.png";
import Satyam2 from "./Satyam2img.png";

function App() {
  return (
    <div>
      <NewCard
        playerimg={SatyamImg}
        playername={"Satyam"}
        matches={22}
        won={14}
        lost={8}
        events={6}
        rank={20}
      />
      <NewCard
        playerimg={Satyam2}
        playername={"Messi"}
        matches={300}
        won={245}
        lost={55}
        events={130}
        rank={1}
      />
    </div>
  );
}

export default App;
