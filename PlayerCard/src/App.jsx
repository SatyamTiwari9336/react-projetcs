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
        matches={20}
        won={12}
        lost={8}
        events={6}
        rank={22}
      />
      <NewCard
        playerimg={Satyam2}
        playername={"Messi"}
        matches={30}
        won={24}
        lost={6}
        events={13}
        rank={1}
      />
    </div>
  );
}

export default App;
