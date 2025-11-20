import React, { useState } from "react";
import { useDispatch } from "react-redux";
function Addtodo() {
  const [Input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(Addtodo(Input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="enter your todo "
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>add todo</button>
    </form>
  );
}

export default Addtodo;
