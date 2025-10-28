import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   name: "satyam",
  //   age: 21,
  // };
  // let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="text-3xl bg-orange-400 font-bold underline p-10 rounded-xl mb-5">
        Hello world!
      </h1>
      <Card Username="chaiaurcode" userinfo={"it is a youtube channel"} />
      <Card Username="Satyam" /> {/*default value is given*/}
    </>
  );
}

export default App;
