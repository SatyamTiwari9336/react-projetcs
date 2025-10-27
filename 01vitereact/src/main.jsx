// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react"; //
///////////////////////////
//this can be used too
// const anotherUser = "chai aur react"; //global variable
// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "click me to visit google",
//   },
//   "click me to go to google",
//   anotherUser
// );
///////////////////////
// we can use this also
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
