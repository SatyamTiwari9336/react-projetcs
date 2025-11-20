import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "../features/todo/todoSlice";
function Todos() {
  const Todo = useSelector((state) => state.Todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {Todo.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removetodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
}

export default Todos;
