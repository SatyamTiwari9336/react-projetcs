import React from "react";
import NewCard from "./Newcard.jsx"; // adjust path if needed

function App() {
  return (
    <div>
      <NewCard matches={20} won={12} lost={8} events={6} rank={22} />
      <NewCard matches={30} won={24} lost={6} events={13} rank={1} />
      <NewCard matches={1} won={1} lost={0} events={0} rank={"-"} />
    </div>
  );
}

export default App;
