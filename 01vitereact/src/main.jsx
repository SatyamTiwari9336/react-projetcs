// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "click me to visit google",
  },
  "click me to go to google"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
