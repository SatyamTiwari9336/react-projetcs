import Chai from "./chai.jsx";

function App() {
  const username = "Satyam";
  return (
    <>
      <Chai />
      <h1>chai aur react {username === "Satyam" ? "good" : "shubham"}</h1>
      <p>test para</p>
    </>
  );
}

export default App;
