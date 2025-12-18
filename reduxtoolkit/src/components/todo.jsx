import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>

      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removetodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
}

export default Todo;
