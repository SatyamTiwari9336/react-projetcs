import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "satyam",
    age: 21,
    info: "he is a great guy",
  };
  // const name2 = prompt("what is you name "); //runs twice due to strict mode and to avoid use usestate and useeffect
  // let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="text-3xl bg-orange-400 font-bold underline p-10 rounded-xl mb-5">
        Hello world!
      </h1>
      <Card Username="chaiaurcode" userinfo={"it is a youtube channel"} />
      <Card Username={"Satyam"} userinfo={myObj.info} />
      {/*default value is given when userinfo is not passed here */}
    </>
  );
}

export default App;
