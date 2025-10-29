import React from "react";
import NewCard from "./Newcard.jsx"; // adjust path if needed

function App() {
  return (
    <div>
      <NewCard matches={20} won={12} lost={8} events={6} rank={22} />
      <NewCard matches={30} won={24} lost={6} events={13} rank={1} />
    </div>
  );
}

export default App;
