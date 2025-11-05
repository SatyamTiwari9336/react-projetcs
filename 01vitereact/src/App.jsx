import Chai from "./Chai.jsx";

function App() {
  const username = "Satyam";
  return (
    <>
      <Chai />
      <h1>chai aur react {username === "Satyam" ? "good" : "shubham"}</h1>
      <p>testing para</p>
    </>
  );
}

export default App;
